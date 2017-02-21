import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule, AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-modal';

import { ROUTES } from './products.routes';

import { ProductsComponent } from './products.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { AIClientsComponent } from './ai-clients/ai-clients.component';

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
        AccordionModule
    ],
    exports: [],
    declarations: [
        ProductsComponent
        , NewClientsComponent
        , AIClientsComponent
    ],
    providers: [],
})
export default class ProductsModule { 
}
