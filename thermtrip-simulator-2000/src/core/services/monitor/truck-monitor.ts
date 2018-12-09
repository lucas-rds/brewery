import { Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import enviromentHeat from '../heat/enviroment-heat';
import { TruckEvents } from '@enums/truck-events.ts';
import { Truck } from '@domain/truck';

export class TruckMonitor {

    private thermometersSubscriptions: Subscription[];
    private enviromentHeatFactor: number = 0;
    private openedDoorPlusHeat: number = 0;
    private containerObservables: BehaviorSubject<any>[];
    private isDoorOpen = false;

    constructor(private truck: Truck) {
        enviromentHeat.onHeatChange.subscribe(heat => {
            this.enviromentHeatFactor = heat
            this.openedDoorPlusHeat = heat * 2;
            this.recalculateTemperatures();
        });
        this.containerObservables = this.truck.containers
            .map(container => container.onTemperatureChange);
    }

    stop(): void {
        this.thermometersSubscriptions.forEach(sub => sub.unsubscribe());
    }

    start(io: SocketIO.Server): void {
        io.on(TruckEvents.TRUCK_CONNECTED, socket => {
            console.log('IOT device connected');
            socket.emit(TruckEvents.TRUCK_DATA, this.truck.truckToIO());
            socket.on(TruckEvents.OPEN_DOOR, () => this.openedDoor());
            socket.on(TruckEvents.CLOSE_DOOR, () => this.closedDoor());
            combineLatest(this.containerObservables)
                .subscribe(() => socket.emit(TruckEvents.TRUCK_DATA, this.truck.truckToIO()))
        });
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
            let temp = container.idealTemperature + this.enviromentHeatFactor;
            if (this.isDoorOpen)
                temp += this.openedDoorPlusHeat;
            container.temperature = temp;
        });
    }

}