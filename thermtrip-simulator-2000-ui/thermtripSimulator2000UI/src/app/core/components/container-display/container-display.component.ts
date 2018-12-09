import { Component, OnInit, Input } from '@angular/core';
import Container from '../../models/Container';

@Component({
  selector: 'thermtrip-container-display',
  templateUrl: './container-display.component.html',
  styleUrls: ['./container-display.component.css']
})
export class ContainerDisplayComponent {

  @Input() container: Container;

  public hasErrors() {
    return this.container.temperature < this.container.minTemperature ||
      this.container.temperature > this.container.maxTemperature;
  }
}
