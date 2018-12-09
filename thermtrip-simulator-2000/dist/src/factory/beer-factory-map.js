"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beer_types_1 = require("../enums/beer-types");
const domain_1 = require("../domain");
const beerFactoryMap = new Map();
beerFactoryMap.set(beer_types_1.BeerTypes.PILSNER, () => new domain_1.Beer(beer_types_1.BeerTypes.PILSNER, 4, 6));
beerFactoryMap.set(beer_types_1.BeerTypes.IPA, () => new domain_1.Beer(beer_types_1.BeerTypes.IPA, 5, 6));
beerFactoryMap.set(beer_types_1.BeerTypes.LAGER, () => new domain_1.Beer(beer_types_1.BeerTypes.LAGER, 4, 7));
beerFactoryMap.set(beer_types_1.BeerTypes.STOUT, () => new domain_1.Beer(beer_types_1.BeerTypes.STOUT, 6, 8));
beerFactoryMap.set(beer_types_1.BeerTypes.WHEATBEER, () => new domain_1.Beer(beer_types_1.BeerTypes.WHEATBEER, 3, 5));
beerFactoryMap.set(beer_types_1.BeerTypes.PALEALE, () => new domain_1.Beer(beer_types_1.BeerTypes.PALEALE, 4, 6));
exports.default = beerFactoryMap;
//# sourceMappingURL=beer-factory-map.js.map