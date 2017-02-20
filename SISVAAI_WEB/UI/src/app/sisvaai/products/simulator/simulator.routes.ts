import { Routes, RouterModule } from '@angular/router';
import { SimulatorComponent } from './simulator.component';

const routes: Routes = [
  { path: '', component: SimulatorComponent, pathMatch: 'full' },  
  //{ path: ':userName', component: SimulatorComponent },
];

export const ROUTES = RouterModule.forChild(routes);
