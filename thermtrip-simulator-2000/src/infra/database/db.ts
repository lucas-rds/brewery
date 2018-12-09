import { of, Observable } from "rxjs";
import { BeerTypes } from "../../core/enums/beer-types";
import { Beer } from "../../core/domain";
import { BeerFactory } from "../../core/factory/beer-factory";
import { injectable } from "inversify";

const until = (n: number) => new Array(n).fill(0);

@injectable()
export default class Database {

    public fetchBeers(): Observable<Beer[]> {
        return of([
            ...until(31).map(i => BeerFactory.CreateBeer(BeerTypes.IPA)),
            ...until(45).map(i => BeerFactory.CreateBeer(BeerTypes.LAGER)),
            ...until(28).map(i => BeerFactory.CreateBeer(BeerTypes.PALEALE)),
            ...until(19).map(i => BeerFactory.CreateBeer(BeerTypes.PILSNER)),
            ...until(72).map(i => BeerFactory.CreateBeer(BeerTypes.STOUT)),
            ...until(17).map(i => BeerFactory.CreateBeer(BeerTypes.WHEATBEER))
        ]);
    }
}