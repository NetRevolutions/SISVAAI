import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ROUTES } from './products.routes';

import { ProductsComponent } from './products.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { AIClientsComponent } from './ai-clients/ai-clients.component';

import { SimulatorComponent } from './simulator/simulator.component';
import { AdvancedComponent } from './simulator/ads/advanced/advanced.component';
import { ProComponent } from './simulator/ads/pro/pro.component';
import { StandardComponent } from './simulator/ads/standard/standard.component';
import { StarterComponent } from './simulator/ads/starter/starter.component';
import { SuperComponent } from './simulator/ads/super/super.component';
import { UltraComponent } from './simulator/ads/ultra/ultra.component';


@NgModule({
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
        AccordionModule,
        //NgbModule        
    ],
    exports: [],
    declarations: [
        ProductsComponent
        , NewClientsComponent
        , AIClientsComponent
        , SimulatorComponent
        , AdvancedComponent
        , ProComponent
        , StandardComponent
        , StarterComponent
        , SuperComponent
        , UltraComponent
    ],
    providers: [],
})
export default class ProductsModule { 
}
