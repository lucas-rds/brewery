import { Container } from "./container";
import { Observable, ReplaySubject } from "rxjs";
import { TruckEvents } from "@enums/truck-events";
import { Truck } from "./truck";

const noop = () => { }

export class IOTDevice {

    private socket: SocketIO.Socket;
    private onOpenDoor$: ReplaySubject<any> = new ReplaySubject(0);
    private onCloseDoor$: ReplaySubject<any> = new ReplaySubject(0);

    constructor(private _io: SocketIO.Server) {
        this._io.on('connection', socket => {
            console.log('IOT device connected');
            this.socket = socket;
            this.setupClientEvents(this.socket);
            this.socket.emit('OPEN_DOOR', {});

        });
    }

    private setupClientEvents(socket: SocketIO.Socket) {
        socket.on(TruckEvents.OPEN_DOOR, message => {
            console.log('OPEN_DOOR', message);
            this.onOpenDoor$.next(message);

        });

        socket.on(TruckEvents.CLOSE_DOOR, message => {
            console.log('CLOSE_DOOR', message);
            this.onCloseDoor$.next(message);
        });
    }

    public updateDisplay(data: any) {
        if (this.socket) {
            console.log(data);
            this.socket.emit('qualquerbosta', data);
        }
    }

    public get onOpenDoor() {
        return this.onOpenDoor$;
    }

    public get onCloseDoor() {
        return this.onCloseDoor$;
    }


}
