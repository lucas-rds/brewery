import { IocContainer } from './infra/ioc/container';
import Application from './application';
import enviroment from 'dotenv';

enviroment.config();

const application = IocContainer.get<Application>(Application);

application.run();