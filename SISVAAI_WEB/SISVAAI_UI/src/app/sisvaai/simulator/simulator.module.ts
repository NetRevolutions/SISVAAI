import 'jquery-slimscroll';

import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ROUTES } from './simulator.routes';

import { SimulatorComponent } from './simulator.component';



@NgModule({
    imports: [
        CommonModule,
        TooltipModule,
        ROUTES,
        FormsModule
    ],
    exports: [],
    declarations: [
        SimulatorComponent
    ],
    providers: [],
})
export default class SimulatorModule { 

}
