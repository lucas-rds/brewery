import { Beer } from "./beer";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { TemperatureStatus } from "./temperature-status";


export class Container {

    private minTemp: number;
    private maxTemp: number;
    private onTemperatureChange$: BehaviorSubject<[Container, number]>;
    private onTemperatureOutOfRange$: ReplaySubject<[Container, TemperatureStatus]>;
    private _idealTemperature = 0;

    constructor(private _id: string,
        private _beers: Beer[],
        minTemperature?: number,
        maxTemperature?: number) {

        this.minTemp = minTemperature || Math.min(..._beers.map(beer => beer.minTemperature));
        this.maxTemp = maxTemperature || Math.max(..._beers.map(beer => beer.maxTemperature));
        this._idealTemperature = (this.minTemp + this.maxTemp) / 2;
        this.onTemperatureChange$ = new BehaviorSubject<[Container, number]>([this, this._idealTemperature]);
        this.onTemperatureOutOfRange$ = new ReplaySubject<[Container, TemperatureStatus]>();
    }

    public get id(): string {
        return this._id;
    }

    public get idealTemperature(): number {
        return this._idealTemperature;
    }

    public get beers(): Beer[] {
        return this._beers;
    }

    public set temperature(temp: number) {
        if (temp < this.minTemp || temp > this.maxTemp) {
            this.onTemperatureOutOfRange.next([this, {
                temperature: temp,
                minTemperature: this.minTemp,
                maxTemperature: this.maxTemp
            }]);
        }
        this.onTemperatureChange$.next([this, temp]);
    }

    public get temperature(): number {
        return this.onTemperatureChange$.getValue()[1];
    }


    public get minTemperature(): number {
        return this.minTemp;
    }

    public get maxTemperature(): number {
        return this.maxTemp;
    }

    public get onTemperatureChange(): BehaviorSubject<[Container, number]> {
        return this.onTemperatureChange$;
    }

    public get onTemperatureOutOfRange(): ReplaySubject<[Container, TemperatureStatus]> {
        return this.onTemperatureOutOfRange$;
    }
}
