import { BeerTypes } from "../enums/beer-types";
import { Beer } from "../domain";

const beerFactoryMap = new Map<BeerTypes, Function>();
beerFactoryMap.set(BeerTypes.PILSNER, () => new Beer(BeerTypes.PILSNER, 4, 6));
beerFactoryMap.set(BeerTypes.IPA, () => new Beer(BeerTypes.IPA, 5, 6));
beerFactoryMap.set(BeerTypes.LAGER, () => new Beer(BeerTypes.LAGER, 4, 7));
beerFactoryMap.set(BeerTypes.STOUT, () => new Beer(BeerTypes.STOUT, 6, 8));
beerFactoryMap.set(BeerTypes.WHEATBEER, () => new Beer(BeerTypes.WHEATBEER, 3, 5));
beerFactoryMap.set(BeerTypes.PALEALE, () => new Beer(BeerTypes.PALEALE, 4, 6));

export default beerFactoryMap;  