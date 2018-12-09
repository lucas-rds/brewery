import 'jest';
import { BeerTypes } from "@enums/beer-types";
import { Container } from '../../domain/container';
import { BeerFactory } from '../../factory/beer-factory';
import { Truck } from '../../domain/truck';
import { TruckMonitor } from './truck-monitor';
import MathUtils from "../../../utils/math-utils";

const mockSocket = {
    emit: jest.fn(),
    on: (event, callback) => { callback(); }
}

jest.mock('../../../utils/math-utils');
jest.mock('socket.io', () => {
    return {
        Server: function () {
            return ({
                on: (event, callback) => {
                    callback(mockSocket)
                }
            })
        }
    }
});

import socketio from 'socket.io';
import { observable } from 'rxjs';

describe('testing that truck monitors', () => {

    let truck: Truck;
    let truckMonitor: TruckMonitor;
    const ID = 'IPA';

    beforeEach(() => {
        truck = undefined;
        const beers = [BeerFactory.CreateBeer(BeerTypes.IPA)];
        const containers = [new Container(ID, beers)];
        truck = new Truck(containers);
        truckMonitor = new TruckMonitor(truck);
    });

    test('are starting and working as expected', () => {
        const io = (<any>socketio).Server();
        truckMonitor.start(io);
        expect(mockSocket.emit).toBeCalled();
    });

    test('are stopping and working as expected', () => {
        const io = (<any>socketio).Server();
        truckMonitor.start(io);
        truckMonitor.stop();
        let allObservablesStoped = truckMonitor.containerObservables
            .every(observable => observable.isStopped);
        expect(mockSocket.emit).toBeCalled();
        expect(allObservablesStoped).toBe(true);
    });

    test('are updating heat', () => {
        const io = (<any>socketio).Server();
        truckMonitor.start(io);
        (truckMonitor as any).updateHeat(5);
        expect(truckMonitor.enviromentHeatFactor).toBe(5);
        expect(truckMonitor.openedDoorPlusHeat).toBe(10);
    });


});
