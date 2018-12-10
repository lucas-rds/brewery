import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import { ContainerDisplayComponent } from '../container-display/container-display.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ScreenCommunicatorComponent } from '../screen-communicator/screen-communicator.component';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;
  let openDoor: any;

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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    openDoor = spyOn(component, 'openDoor').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger function on button click', async(() => {
    component.containers = [{
      id: 'MYID',
      temperature: 1,
      minTemperature: 2,
      maxTemperature: 3
    }];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(openDoor).toHaveBeenCalled();
    });
  }));
  it('should have certain text in button when opened/closed', async(() => {
    component.containers = [{
      id: 'MYID',
      temperature: 1,
      minTemperature: 2,
      maxTemperature: 3
    }];
    component.opened = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Close Truck Backdoor');
    expect(compiled.querySelector('.main-temperature-label').textContent).toContain('Temperature: 1');
  }));
});
