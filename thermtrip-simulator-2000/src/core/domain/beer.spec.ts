import 'jest';
import { BeerTypes } from "@enums/beer-types";
import { Beer } from './beer';
import { BeerFactory } from '../factory/beer-factory';

describe('assserting that beer', () => {

    let beer: Beer;

    beforeEach(() => {
        beer = undefined;
        beer = BeerFactory.CreateBeer(BeerTypes.IPA);
    });

    test('is being created as expected', () => {
        expect(beer.minTemperature).toBe(5);
        expect(beer.maxTemperature).toBe(6);
        expect(beer.type).toBe(BeerTypes.IPA);
    });

});
