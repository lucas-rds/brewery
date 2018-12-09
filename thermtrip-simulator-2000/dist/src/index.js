"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./infra/ioc/container");
const application_1 = __importDefault(require("./application"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const application = container_1.IocContainer.get(application_1.default);
application.run();
//# sourceMappingURL=index.js.map