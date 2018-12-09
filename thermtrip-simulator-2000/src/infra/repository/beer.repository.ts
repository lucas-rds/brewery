import Database from "../database/db";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BeerTypes } from "../../core/enums/beer-types";
import { injectable } from "inversify";

@injectable()
export default class BeerRepository {
    constructor(private connection: Database) {
    }

    public getBeersByType(): Observable<any> {
        return this.connection
            .fetchBeers()
            .pipe(map(beers => {
                const data: any = {}; // Map<> didnt worked with express for some reason 
                data[BeerTypes.IPA] = beers.filter(beer => beer.type == BeerTypes.IPA);
                data[BeerTypes.IPA] = beers.filter(beer => beer.type == BeerTypes.IPA);
                data[BeerTypes.LAGER] = beers.filter(beer => beer.type == BeerTypes.LAGER);
                data[BeerTypes.PALEALE] = beers.filter(beer => beer.type == BeerTypes.PALEALE);
                data[BeerTypes.PILSNER] = beers.filter(beer => beer.type == BeerTypes.PILSNER);
                data[BeerTypes.STOUT] = beers.filter(beer => beer.type == BeerTypes.STOUT);
                data[BeerTypes.WHEATBEER] = beers.filter(beer => beer.type == BeerTypes.WHEATBEER);
                return data;
            }));
    }
}