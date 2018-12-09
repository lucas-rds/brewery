import 'jest';
import enviromentHeat from './enviroment-heat';
import MathUtils from "../../../utils/math-utils";
jest.mock('../../../utils/math-utils');

describe('assserting that enviroment heat simulator', () => {

    test('is working as expected', (done) => {
        enviromentHeat.onHeatChange.subscribe(heat => {
            expect(heat).toBe(0.5);
            done();
        });
    });

});
