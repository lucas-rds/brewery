import { BeerTypes } from "../enums/beer-types";

export class Beer {
    type: BeerTypes;
    minTemperature: number;
    maxTemperature: number;

    constructor(type: BeerTypes,
        minTemperature: number,
        maxTemperature: number) {
            this.type = type;
            this.minTemperature = minTemperature;
            this.maxTemperature = maxTemperature;
    }
}
