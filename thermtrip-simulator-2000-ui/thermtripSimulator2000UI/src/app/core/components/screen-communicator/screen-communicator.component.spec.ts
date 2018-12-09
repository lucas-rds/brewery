import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCommunicatorComponent } from './screen-communicator.component';

describe('ScreenCommunicatorComponent', () => {
  let component: ScreenCommunicatorComponent;
  let fixture: ComponentFixture<ScreenCommunicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenCommunicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCommunicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
