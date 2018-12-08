"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enviroment_heat_1 = __importDefault(require("../heat/enviroment-heat"));
class TruckMonitor {
    constructor(truck) {
        this.enviromentHeatFactor = 0;
        this.openedDoorPlusHeat = 0;
        this.openedDoor = () => {
            this.truck.containers.forEach(container => {
                container.temperature += this.enviromentHeatFactor + this.openedDoorPlusHeat;
            });
        };
        this.closedDoor = () => {
            this.truck.containers.forEach(container => {
                container.temperature -= this.enviromentHeatFactor + this.openedDoorPlusHeat;
            });
        };
        this.truck = truck;
        enviroment_heat_1.default.onHeatChange()
            .subscribe(heat => {
            this.enviromentHeatFactor = heat;
            this.openedDoorPlusHeat = heat * 0.05;
        });
    }
    stop() {
        this.truckOpenDoorSubscription.unsubscribe();
        this.truckClosedDoorSubscription.unsubscribe();
        this.thermometersSubscriptions.forEach(sub => sub.unsubscribe());
        this.containersWrongTempSubscriptions.forEach(sub => sub.unsubscribe());
    }
    start() {
        this.truckOpenDoorSubscription = this.truck
            .onOpenDoor
            .subscribe(this.openedDoor);
        this.truckClosedDoorSubscription = this.truck
            .onCloseDoor
            .subscribe(this.closedDoor);
        this.thermometersSubscriptions = this.truck.containers
            .map(container => container.onTemperatureChange
            .subscribe(temp => {
            // console.log('nova temperatura', temp);
        }));
        this.containersWrongTempSubscriptions = this.truck.containers
            .map(container => container.onTemperatureOutOfRange
            .subscribe((status) => {
            console.log('status', status);
        }));
    }
}
exports.TruckMonitor = TruckMonitor;
//# sourceMappingURL=truck-monitor.js.map