import 'jest';
import { BeerTypes } from "@enums/beer-types";
import { Container } from './container';
import { BeerFactory } from '../factory/beer-factory';

describe('assserting that container', () => {

    let container: Container;
    let minTemp: number;
    let maxTemp: number;
    let idealTemp: number;
    const ID = 'IPA';

    beforeEach(() => {
        container = undefined;
        const beers = [BeerFactory.CreateBeer(BeerTypes.IPA)];
        minTemp = Math.min(...beers.map(beer => beer.minTemperature));
        maxTemp = Math.max(...beers.map(beer => beer.maxTemperature));
        idealTemp = (minTemp + maxTemp) / 2;
        container = new Container(ID, beers);
    });

    test('is being created as expected', () => {
        expect(container.id).toBe(ID);
        expect(container.minTemperature).toBe(minTemp);
        expect(container.maxTemperature).toBe(maxTemp);
        expect(container.idealTemperature).toBe(idealTemp);
        expect(container.beers.length).toBe(1);
    });

    test('temperature callbacks are ok', (done) => {
        container.temperature = 50;
        container.onTemperatureChange.subscribe(newTemp => {
            expect(newTemp[1]).toBe(50);
            done();
        })
    });

    test('temperature callbacks are going through ifs', (done) => {
        container.temperature = 5.5;
        container.onTemperatureChange.subscribe(newTemp => {
            expect(newTemp[1]).toBe(5.5);
            done();
        })
    });

    test('temperature out of range got triggered', (done) => {
        container.temperature = 780;
        container.onTemperatureOutOfRange.subscribe(containerAndError => {
            expect(containerAndError[1]).toBeInstanceOf(Object);
            expect(containerAndError[1].temperature).toBe(780);
            done();
        })
    });


});
