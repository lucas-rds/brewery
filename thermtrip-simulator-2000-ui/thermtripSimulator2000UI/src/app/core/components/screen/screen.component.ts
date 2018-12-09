import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Container from '../../models/Container';

@Component({
  selector: 'thermtrip-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  @Input() public containers: Container[];
  @Output() public doorButtonClicked: EventEmitter<boolean> = new EventEmitter();
  public opened = false;

  constructor() { }

  public openDoor(event) {
    this.opened = !this.opened;
    this.doorButtonClicked.emit(this.opened);
  }
}
