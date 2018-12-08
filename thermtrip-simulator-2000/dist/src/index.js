"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const domain_1 = require("./domain");
const truck_monitor_1 = require("./services/monitor/truck-monitor");
const beer_repository_1 = __importDefault(require("./repository/beer.repository"));
const db_1 = __importDefault(require("./database/db"));
/*
    TODO:
    Ordenar cervejas
    Gerar Temperatura randomica
    Monitorar Temperatura
    Conectar monitor temperatura com Socketio
*/
dotenv_1.default.config();
const app = express_1.default();
var server = new http_1.default.Server(app);
const io = socket_io_1.default(server);
const database = new db_1.default();
const repository = new beer_repository_1.default(database);
app.use(cors_1.default());
app.get('/', function (req, res) {
    repository.getBeersByType()
        .subscribe(beers => {
        res.json(beers);
    });
});
io.on('connection', function newConnection() {
});
const PORT = process.env.PORT || 8080;
server.listen(PORT, function () {
    console.log('listening on *:' + PORT);
});
repository
    .getBeersByType()
    .subscribe(beers => {
    const containers = Object.keys(beers)
        .map(type => {
        return new domain_1.Container(beers[type]);
    });
    let truck = new domain_1.Truck(containers);
    let truckMonitor = new truck_monitor_1.TruckMonitor(truck);
    truckMonitor.start();
    setInterval(() => {
        truck.openBackDoor();
        if (truck.isDoorOpened) {
            truck.closeBackDoor();
        }
    }, 5000);
});
//# sourceMappingURL=index.js.map