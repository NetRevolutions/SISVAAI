import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';

import { ROUTES } from './products.routes';

import { ProductsComponent } from './products.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { AIClientsComponent } from './ai-clients/ai-clients.component';
//import { SimulatorComponent } from './simulator/simulator.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ROUTES
    ],
    exports: [],
    declarations: [
        ProductsComponent
        , NewClientsComponent
        , AIClientsComponent
        //, SimulatorComponent
    ],
    providers: [],
})
export default class ProductsModule { 
}
