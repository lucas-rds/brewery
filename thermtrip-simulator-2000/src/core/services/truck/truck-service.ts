import { Truck } from '../../domain/truck';
import { Container } from '../../domain';
import BeerRepository from '../../../infra/repository/beer.repository';
import { TruckMonitor } from '../monitor/truck-monitor';
import { injectable } from 'inversify';

@injectable()
export class TruckService {

    constructor(private beerRepository: BeerRepository) {
    }

    public initTruckMonitor(io: SocketIO.Server) {
        console.log('Initializing Truck Monitor');
        this.beerRepository
            .getBeersByType()
            .subscribe(beers => {

                const containers = Object
                    .keys(beers)
                    .map((type, i) => new Container(`${type} - ${i}`, beers[type]));
                let truck = new Truck(containers);
                let truckMonitor = new TruckMonitor(truck);
                truckMonitor.start(io);

            });
    }
}