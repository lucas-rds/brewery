import { Container } from "./container";
import { BehaviorSubject } from "rxjs";

export class Truck {
    private onOpenDoor$: BehaviorSubject<boolean>;
    private onCloseDoor$: BehaviorSubject<boolean>;
    private _containers: Container[];
    private _isDoorOpened: boolean;

    constructor(containers: Container[]) {
        this._containers = containers;
        this.onOpenDoor$ = new BehaviorSubject<boolean>(false);
        this.onCloseDoor$ = new BehaviorSubject<boolean>(true);
    }

    public get containers(): Container[] {
        return this._containers;
    }

    public get isDoorOpened(): boolean {
        return this._isDoorOpened;
    }

    public get onOpenDoor(): BehaviorSubject<boolean> {
        return this.onOpenDoor$;
    }

    public get onCloseDoor(): BehaviorSubject<boolean> {
        return this.onCloseDoor$;
    }

    public openBackDoor() {
        this._isDoorOpened = true;
        this.onOpenDoor.next(true);
    }

    public closeBackDoor() {
        this._isDoorOpened = false;
        this.onCloseDoor.next(false);
    }
}
