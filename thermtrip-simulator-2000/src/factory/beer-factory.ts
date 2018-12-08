import { BeerTypes } from "../enums/beer-types";
import beerFactoryMap from "./beer-factory-map";

export class BeerFactory {
    public static CreateBeer = (type: BeerTypes) => beerFactoryMap.get(type)();
}