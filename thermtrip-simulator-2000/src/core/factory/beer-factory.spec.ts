import 'jest';
import { BeerFactory } from "./beer-factory";
import { BeerTypes } from "@enums/beer-types";
import { Beer } from "@domain/beer";

test('factory is working', () => {
    const ipaBeer: Beer = BeerFactory.CreateBeer(BeerTypes.IPA)
    expect(ipaBeer.type).toBe(BeerTypes.IPA);
    expect(ipaBeer.minTemperature).toBe(5);
    expect(ipaBeer.maxTemperature).toBe(6);
});