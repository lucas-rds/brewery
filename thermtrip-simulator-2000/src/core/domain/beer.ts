import { BeerTypes } from "../../core/enums/beer-types";

export class Beer {
    constructor(
        private _type: BeerTypes,
        private _minTemperature: number,
        private _maxTemperature: number
    ) { }

    public get type(): string {
        return this._type;
    }

    public get minTemperature(): number {
        return this._minTemperature;
    }

    public get maxTemperature(): number {
        return this._maxTemperature;
    }

}
