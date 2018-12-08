"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const beer_factory_1 = require("../factory/beer-factory");
const until = (n) => new Array(n).fill(0);
class Database {
    fetchBeers() {
        return rxjs_1.of([
            ...until(31).map(i => beer_factory_1.BeerFactory.CreateBeer(1 /* IPA */)),
            ...until(45).map(i => beer_factory_1.BeerFactory.CreateBeer(2 /* LAGER */)),
            ...until(28).map(i => beer_factory_1.BeerFactory.CreateBeer(5 /* PALEALE */)),
            ...until(19).map(i => beer_factory_1.BeerFactory.CreateBeer(0 /* PILSNER */)),
            ...until(72).map(i => beer_factory_1.BeerFactory.CreateBeer(3 /* STOUT */)),
            ...until(17).map(i => beer_factory_1.BeerFactory.CreateBeer(4 /* WHEATBEER */))
        ]);
    }
}
exports.default = Database;
//# sourceMappingURL=db.js.map