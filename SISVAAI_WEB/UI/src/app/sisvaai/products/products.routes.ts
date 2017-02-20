import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { NewClientsComponent } from './new-clients/new-clients.component';
import { AIClientsComponent } from './ai-clients/ai-clients.component';


const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },  
  { path: ':userName', component: ProductsComponent, children:[
    { path: 'new-clients', component: NewClientsComponent, pathMatch: 'full' },
    { path: 'ai-clients', component: AIClientsComponent },
    { path: 'simulator', loadChildren: () => System.import('./simulator/simulator.module')}
  ]}  
];

export const ROUTES = RouterModule.forChild(routes);
