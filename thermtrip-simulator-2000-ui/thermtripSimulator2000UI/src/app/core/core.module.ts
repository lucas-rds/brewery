import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContainerDisplayComponent } from './components/container-display/container-display.component';
import { ScreenComponent } from './components/screen/screen.component';
import { ScreenCommunicatorComponent } from './components/screen-communicator/screen-communicator.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContainerDisplayComponent,
    ScreenComponent,
    ScreenCommunicatorComponent
  ],
  declarations: [
    ContainerDisplayComponent,
    ScreenComponent,
    ScreenCommunicatorComponent
  ]
})
export class CoreModule { }
