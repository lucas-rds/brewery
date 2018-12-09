import { Component, OnInit, Input } from '@angular/core';
import Container from '../../models/Container';

@Component({
  selector: 'thermtrip-container-display',
  templateUrl: './container-display.component.html',
  styleUrls: ['./container-display.component.css']
})
export class ContainerDisplayComponent implements OnInit {

  @Input() container: Container;

  constructor() { }

  ngOnInit() {
  }

}
