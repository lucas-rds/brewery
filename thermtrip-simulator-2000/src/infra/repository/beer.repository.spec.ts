import 'jest';
import BeerRepository from './beer.repository';
import Database from '../database/db';
jest.mock("inversify");

describe('assserting that the database and repository', () => {

    let database: Database;
    let repository: BeerRepository;

    beforeEach(() => {
        database = new Database();
        repository = new BeerRepository(database);
    })

    test('are working as expected', (done) => {
        const beers = repository.getBeersByType().subscribe(beers => {
            expect(Object.keys(beers).length).toBe(6);
            done();
        });
    });

});
