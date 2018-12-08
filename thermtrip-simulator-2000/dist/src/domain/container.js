"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class Container {
    constructor(beers, minTemperature, maxTemperature) {
        this._beers = beers;
        this.minTemp = minTemperature || Math.min(...beers.map(beer => beer.minTemperature));
        this.maxTemp = maxTemperature || Math.max(...beers.map(beer => beer.maxTemperature));
        this.onTemperatureChange$ = new rxjs_1.BehaviorSubject((this.minTemp + this.maxTemp) / 2);
        this.onTemperatureOutOfRange$ = new rxjs_1.ReplaySubject();
    }
    get beers() {
        return this._beers;
    }
    set temperature(temp) {
        if (temp < this.minTemp || temp > this.maxTemp) {
            this.onTemperatureOutOfRange.next({
                temperature: temp,
                minTemperature: this.minTemp,
                maxTemperature: this.maxTemp
            });
        }
        this.onTemperatureChange$.next(temp);
    }
    get temperature() {
        return this.onTemperatureChange$.getValue();
    }
    get minTemperature() {
        return this.minTemp;
    }
    get maxTemperature() {
        return this.maxTemp;
    }
    get onTemperatureChange() {
        return this.onTemperatureChange$;
    }
    get onTemperatureOutOfRange() {
        return this.onTemperatureOutOfRange$;
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map