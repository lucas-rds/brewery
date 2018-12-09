import { Injectable } from '@angular/core';
import { SocketService } from 'src/app/shared/services/socket.service';
import { TruckEvents } from '../enums/truck-events';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerSocketService {

  private socket: SocketIOClient.Socket;
  private onData$: BehaviorSubject<any>;

  constructor(private socketService: SocketService) {
    this.onData$ = new BehaviorSubject<any>({ containers: [] });
  }

  connect() {
    this.socket = this.socketService.connect('localhost:8080');
    this.socketService.onEvent(TruckEvents.TRUCK_DATA).subscribe(data => {
      this.onData$.next(data);
    });
  }

  disconnect() {
    this.socketService.disconnect();
  }

  toggleDoor(isOpened: boolean) {
    const event = isOpened ? TruckEvents.OPEN_DOOR : TruckEvents.CLOSE_DOOR;
    this.socketService.emit(event, isOpened);
  }

  public get onData(): BehaviorSubject<any> {
    return this.onData$;
  }

}
