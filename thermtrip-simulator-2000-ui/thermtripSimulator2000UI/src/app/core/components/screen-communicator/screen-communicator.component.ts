import { Component, OnInit } from '@angular/core';
import Container from '../../models/Container';
import { ContainerSocketService } from '../../services/container-socket.service';

@Component({
  selector: 'thermtrip-screen-communicator',
  templateUrl: './screen-communicator.component.html',
  styleUrls: ['./screen-communicator.component.css']
})
export class ScreenCommunicatorComponent implements OnInit {

  public containers: Container[];

  constructor(private containerSocketService: ContainerSocketService) { }

  ngOnInit() {
    this.containerSocketService.connect();
    this.containerSocketService.onData.subscribe(data => {
      this.containers = data.containers;
    });
  }

  public doorButtonClicked(isOpened) {
    this.containerSocketService.toggleDoor(isOpened);
  }


}
