"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beer_factory_map_1 = __importDefault(require("./beer-factory-map"));
class BeerFactory {
}
BeerFactory.CreateBeer = (type) => beer_factory_map_1.default.get(type)();
exports.BeerFactory = BeerFactory;
//# sourceMappingURL=beer-factory.js.map