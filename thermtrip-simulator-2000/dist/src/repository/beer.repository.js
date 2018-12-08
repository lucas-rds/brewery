"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
class BeerRepository {
    constructor(databaseConnection) {
        this.connection = databaseConnection;
    }
    getBeersByType() {
        return this.connection.fetchBeers()
            .pipe(operators_1.map(beers => {
            const data = {}; // Map<> didnt worked with express for some reason 
            data[1 /* IPA */] = beers.filter(beer => beer.type == 1 /* IPA */);
            data[1 /* IPA */] = beers.filter(beer => beer.type == 1 /* IPA */);
            data[2 /* LAGER */] = beers.filter(beer => beer.type == 2 /* LAGER */);
            data[5 /* PALEALE */] = beers.filter(beer => beer.type == 5 /* PALEALE */);
            data[0 /* PILSNER */] = beers.filter(beer => beer.type == 0 /* PILSNER */);
            data[3 /* STOUT */] = beers.filter(beer => beer.type == 3 /* STOUT */);
            data[4 /* WHEATBEER */] = beers.filter(beer => beer.type == 4 /* WHEATBEER */);
            return data;
        }));
    }
}
exports.default = BeerRepository;
//# sourceMappingURL=beer.repository.js.map