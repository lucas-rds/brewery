import { Injectable } from '@angular/core';
import * as SocketIO from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: SocketIOClient.Socket;

  constructor() { }

  connect(address: string): SocketIOClient.Socket {
    this.socket = SocketIO(address);
    return this.socket;
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', data => observer.next(data));
    });
  }

  onEvent(event: string): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }

  emit(event: string, message: any) {
    this.socket.emit(event, message);
  }
}
