import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDisplayComponent } from './container-display.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScreenCommunicatorComponent } from '../screen-communicator/screen-communicator.component';
import { ScreenComponent } from '../screen/screen.component';
import Container from '../../models/Container';

describe('ContainerDisplayComponent', () => {
  let component: ContainerDisplayComponent;
  let fixture: ComponentFixture<ContainerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule
      ],
      declarations: [
        ContainerDisplayComponent,
        ScreenComponent,
        ScreenCommunicatorComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all tags properly', async(() => {
    component.container = {
      id: 'MYID',
      temperature: 1,
      minTemperature: 2,
      maxTemperature: 3
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-header').textContent).toContain('MYID');
    expect(compiled.querySelector('.main-temperature-label').textContent).toContain('Temperature: 1');
  }));

});
