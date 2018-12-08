import { Subscription } from 'rxjs';
import IMonitor from './monitor';
import { Truck } from '../../domain/truck';
import { TemperatureStatus } from '../../domain';
import enviromentHeat from '../heat/enviroment-heat';

export class TruckMonitor implements IMonitor {

    private truck: Truck;
    private truckOpenDoorSubscription: Subscription;
    private truckClosedDoorSubscription: Subscription;
    private thermometersSubscriptions: Subscription[];
    private containersWrongTempSubscriptions: Subscription[];

    private enviromentHeatFactor: number = 0;
    private openedDoorPlusHeat: number = 0;

    constructor(truck: Truck) {
        this.truck = truck;
        enviromentHeat.onHeatChange()
            .subscribe(heat => {
                this.enviromentHeatFactor = heat
                this.openedDoorPlusHeat = heat * 0.05;
            })
    }

    stop(): void {
        this.truckOpenDoorSubscription.unsubscribe();
        this.truckClosedDoorSubscription.unsubscribe();
        this.thermometersSubscriptions.forEach(sub => sub.unsubscribe());
        this.containersWrongTempSubscriptions.forEach(sub => sub.unsubscribe());
    }

    start(): void {
        this.truckOpenDoorSubscription = this.truck
            .onOpenDoor
            .subscribe(this.openedDoor)
        this.truckClosedDoorSubscription = this.truck
            .onCloseDoor
            .subscribe(this.closedDoor)

        this.thermometersSubscriptions = this.truck.containers
            .map(container => container.onTemperatureChange
                .subscribe(temp => {
                    // console.log('nova temperatura', temp);
                }));

        this.containersWrongTempSubscriptions = this.truck.containers
            .map(container => container.onTemperatureOutOfRange
                .subscribe((status: TemperatureStatus) => {
                    console.log('status', status);
                }));
    }

    private openedDoor = () => {
        this.truck.containers.forEach(container => {
            container.temperature += this.enviromentHeatFactor + this.openedDoorPlusHeat;
        });
    }

    private closedDoor = () => {
        this.truck.containers.forEach(container => {
            container.temperature -= this.enviromentHeatFactor + this.openedDoorPlusHeat;
        });
    }
}