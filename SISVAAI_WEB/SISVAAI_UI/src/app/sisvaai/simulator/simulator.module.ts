import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './simulator.routes';

import { SimulatorComponent } from './simulator.component';

@NgModule({
  declarations: [
    SimulatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES
  ]
})
export default class SimulatorModule {  
}