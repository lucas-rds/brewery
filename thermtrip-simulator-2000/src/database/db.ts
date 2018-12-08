import { Beer } from "../domain";
import { of, Observable } from "rxjs";
import { BeerFactory } from "../factory/beer-factory";
import { BeerTypes } from "..//enums/beer-types";


const until = (n: number) => new Array(n).fill(0);

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