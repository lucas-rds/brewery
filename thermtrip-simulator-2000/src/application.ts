import { injectable } from "inversify";
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import cors from 'cors';
import { TruckService } from "./core/services/truck/truck-service";
import { IOTDevice } from "./core/domain";

const PORT = process.env.PORT || 8080;

@injectable()
export default class Application {
    private expressApp: express.Express;
    private httpServer: http.Server;
    private io: SocketIO.Server;

    constructor(private truckService: TruckService) {
        this.expressApp = express();
        this.httpServer = new http.Server(this.expressApp);
        this.io = socketio(this.httpServer);
    }

    private setupWeb() {
        this.expressApp.use(cors());
        this.expressApp.get('/', function (req, res) {
            res.send('Running');
        });
    }

    public run() {
        this.setupWeb();
        this.httpServer.listen(PORT, () => {
            console.log('Listening WEB on *:' + PORT);
            this.truckService.initTruckMonitor(this.io);
        });
    }


} 