import "reflect-metadata";
import { Container } from "inversify";
import Application from "../../application";
import Database from "../database/db";
import BeerRepository from "../repository/beer.repository";
import { TruckService } from "../../core/services/truck/truck-service";

const IocContainer = new Container();
IocContainer.bind<Application>(Application).toSelf();
IocContainer.bind<Database>(Database).toSelf();
IocContainer.bind<BeerRepository>(BeerRepository).toSelf();
IocContainer.bind<TruckService>(TruckService).toSelf();

export { IocContainer };