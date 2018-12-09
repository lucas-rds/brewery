import { Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import enviromentHeat from '../heat/enviroment-heat';
import { TruckEvents } from '@enums/truck-events.ts';
import { Truck } from '@domain/truck';
import * as socketio from 'socket.io';

export class TruckMonitor {

    private _enviromentHeatFactor: number = 0;
    private _openedDoorPlusHeat: number = 0;
    private _containerObservables: BehaviorSubject<any>[];
    private isDoorOpen = false;

    constructor(private truck: Truck) {
        enviromentHeat.onHeatChange.subscribe(this.updateHeat);
        this._containerObservables = this.truck.containers
            .map(container => container.onTemperatureChange);
    }

    public get containerObservables(): BehaviorSubject<any>[] {
        return this._containerObservables;
    }


    public get enviromentHeatFactor(): any {
        return this._enviromentHeatFactor;
    }
    
    public get openedDoorPlusHeat(): any {
        return this._openedDoorPlusHeat;
    }

    stop(): void {
        this._containerObservables.forEach(sub => sub.unsubscribe());
    }

    start(io: socketio.Server): void {
        io.on(TruckEvents.TRUCK_CONNECTED, socket => {
            console.log('IOT device connected');
            socket.emit(TruckEvents.TRUCK_DATA, this.truck.truckToIO());
            socket.on(TruckEvents.OPEN_DOOR, () => this.openedDoor());
            socket.on(TruckEvents.CLOSE_DOOR, () => this.closedDoor());
            combineLatest(this._containerObservables)
                .subscribe(() => socket.emit(TruckEvents.TRUCK_DATA, this.truck.truckToIO()))
        });
    }

    private updateHeat = heat => {
        this._enviromentHeatFactor = heat
        this._openedDoorPlusHeat = heat * 2;
        this.recalculateTemperatures();
    }

    private openedDoor = () => {
        this.isDoorOpen = true;
        this.recalculateTemperatures();
    }

    private closedDoor = () => {
        this.isDoorOpen = false;
        this.recalculateTemperatures();
    }

    private recalculateTemperatures() {
        this.truck.containers.forEach(container => {
            let temp = container.idealTemperature + this._enviromentHeatFactor;
            if (this.isDoorOpen)
                temp += this._openedDoorPlusHeat;
            container.temperature = temp;
        });
    }

}