"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class Thermometer {
    constructor() {
        this._onTemperatureChange = new rxjs_1.BehaviorSubject(0);
    }
    set temperature(v) {
        this._onTemperatureChange.next(v);
    }
    get temperature() {
        return this._onTemperatureChange.getValue();
    }
    get onTemperatureChange() {
        return this._onTemperatureChange;
    }
}
exports.Thermometer = Thermometer;
//# sourceMappingURL=thermometer.js.map