"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class Truck {
    constructor(containers) {
        this._containers = containers;
        this.onOpenDoor$ = new rxjs_1.BehaviorSubject(false);
        this.onCloseDoor$ = new rxjs_1.BehaviorSubject(true);
    }
    get containers() {
        return this._containers;
    }
    get isDoorOpened() {
        return this._isDoorOpened;
    }
    get onOpenDoor() {
        return this.onOpenDoor$;
    }
    get onCloseDoor() {
        return this.onCloseDoor$;
    }
    openBackDoor() {
        this._isDoorOpened = true;
        this.onOpenDoor.next(true);
    }
    closeBackDoor() {
        this._isDoorOpened = false;
        this.onCloseDoor.next(false);
    }
}
exports.Truck = Truck;
//# sourceMappingURL=truck.js.map