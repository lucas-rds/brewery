import { Beer } from "./beer";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { TemperatureStatus } from "./temperature-status";


export class Container {

    private _beers: Beer[];
    private minTemp: number;
    private maxTemp: number;
    private onTemperatureChange$: BehaviorSubject<number>;
    private onTemperatureOutOfRange$: ReplaySubject<TemperatureStatus>;

    constructor(beers: Beer[],
        minTemperature?: number,
        maxTemperature?: number) {

        this._beers = beers;
        this.minTemp = minTemperature || Math.min(...beers.map(beer => beer.minTemperature));
        this.maxTemp = maxTemperature || Math.max(...beers.map(beer => beer.maxTemperature));
        this.onTemperatureChange$ = new BehaviorSubject<number>((this.minTemp + this.maxTemp) / 2);
        this.onTemperatureOutOfRange$ = new ReplaySubject<TemperatureStatus>();
    }

    public get beers(): Beer[] {
        return this._beers;
    }

    public set temperature(temp: number) {
        if (temp < this.minTemp || temp > this.maxTemp) {
            this.onTemperatureOutOfRange.next({
                temperature: temp,
                minTemperature: this.minTemp,
                maxTemperature: this.maxTemp
            });
        }
        this.onTemperatureChange$.next(temp);
    }

    public get temperature(): number {
        return this.onTemperatureChange$.getValue();
    }

    public get minTemperature(): number {
        return this.minTemp;
    }

    public get maxTemperature(): number {
        return this.maxTemp;
    }

    public get onTemperatureChange(): BehaviorSubject<number> {
        return this.onTemperatureChange$;
    }

    public get onTemperatureOutOfRange(): ReplaySubject<TemperatureStatus> {
        return this.onTemperatureOutOfRange$;
    }
}
