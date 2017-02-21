import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';

import { ROUTES } from './simulator.routes';

import { SimulatorComponent } from './simulator.component';

//Ads
import { AdvancedComponent } from './ads/advanced/advanced.component';
import { ProComponent } from './ads/pro/pro.component';
import { StandardComponent } from './ads/standard/standard.component';
import { StarterComponent } from './ads/starter/starter.component';
import { SuperComponent } from './ads/super/super.component';
import { UltraComponent } from './ads/ultra/ultra.component';


@NgModule({
  declarations: [
    SimulatorComponent,
    AdvancedComponent,
    ProComponent,
    StandardComponent,
    StarterComponent,
    SuperComponent,
    UltraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ROUTES,
    AlertModule,
    //WidgetModule,
    TooltipModule,
    ModalModule,
    ButtonsModule,
    DropdownModule,
    TabsModule,
    AccordionModule
  ]
})
export default class SimulatorModule {
    static ROUTES = ROUTES;
}