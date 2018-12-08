"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../domain");
const beerFactoryMap = new Map();
beerFactoryMap.set(0 /* PILSNER */, () => new domain_1.Beer(0 /* PILSNER */, 4, 6));
beerFactoryMap.set(1 /* IPA */, () => new domain_1.Beer(1 /* IPA */, 5, 6));
beerFactoryMap.set(2 /* LAGER */, () => new domain_1.Beer(2 /* LAGER */, 4, 7));
beerFactoryMap.set(3 /* STOUT */, () => new domain_1.Beer(3 /* STOUT */, 6, 8));
beerFactoryMap.set(4 /* WHEATBEER */, () => new domain_1.Beer(4 /* WHEATBEER */, 3, 5));
beerFactoryMap.set(5 /* PALEALE */, () => new domain_1.Beer(5 /* PALEALE */, 4, 6));
exports.default = beerFactoryMap;
//# sourceMappingURL=beer-factory-map.js.map