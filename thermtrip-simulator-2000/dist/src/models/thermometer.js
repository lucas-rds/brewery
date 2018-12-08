"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Thermometer {
    set temperature(v) {
        this._onTemperatureChange.onNext(v);
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