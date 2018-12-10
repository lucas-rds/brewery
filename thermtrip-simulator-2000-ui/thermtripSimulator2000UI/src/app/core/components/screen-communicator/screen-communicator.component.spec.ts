import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCommunicatorComponent } from './screen-communicator.component';
import { ContainerDisplayComponent } from '../container-display/container-display.component';
import { ScreenComponent } from '../screen/screen.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainerSocketService } from '../../services/container-socket.service';

describe('ScreenCommunicatorComponent', () => {
  let component: ScreenCommunicatorComponent;
  let fixture: ComponentFixture<ScreenCommunicatorComponent>;
  let mockService: ContainerSocketService;
  // class MockService {
  //   connect() {
  //     return;
  //   }
  //   subscribe(cb: Function) {

  //   }
  // }

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
      ],
      providers: [
        ContainerSocketService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCommunicatorComponent);
    component = fixture.componentInstance;
    mockService = TestBed.get(ContainerSocketService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run lifecycle', () => {
    const spy = spyOn(mockService, 'connect').and.returnValue(true);
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

});
