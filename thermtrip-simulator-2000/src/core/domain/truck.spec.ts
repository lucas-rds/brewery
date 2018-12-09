import 'jest';
import { BeerTypes } from "@enums/beer-types";
import { Truck } from './truck';
import { Container } from './container';
import { Beer } from './beer';
import { BeerFactory } from '../factory/beer-factory';

describe('testing that truck', () => {

    let truck: Truck;
    const ID = 'IPA';

    beforeEach(() => {
        truck = undefined;
        const beers = [BeerFactory.CreateBeer(BeerTypes.IPA)];
        const containers = [new Container(ID, beers)];
        truck = new Truck(containers);
    });

    test('is being created as expected', () => {
        expect(truck.containers.length).toBe(1);
        expect(truck.isDoorOpened).toBe(false);
    });

    test('can open door', (done) => {
        truck.openBackDoor();
        truck.onOpenDoor.subscribe(opened => {
            expect(truck.isDoorOpened).toBe(true);
            done();
        })
    });

    test('can close door', (done) => {
        truck.openBackDoor();
        truck.closeBackDoor();
        truck.onOpenDoor.subscribe(opened => {
            expect(truck.isDoorOpened).toBe(false);
            done();
        })
    });

    test('can be parsed to IO object', () => {
        const IoObject = truck.truckToIO();
        expect(IoObject.containers.length).toBe(1);
        expect(IoObject.containers[0].id).toBe(ID);
    });

});
