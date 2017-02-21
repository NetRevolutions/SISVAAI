import { Routes, RouterModule } from '@angular/router';

import { SimulatorComponent } from './simulator.component';

//Ads
import { AdvancedComponent } from './ads/advanced/advanced.component';
import { ProComponent } from './ads/pro/pro.component';
import { StandardComponent } from './ads/standard/standard.component';
import { StarterComponent } from './ads/starter/starter.component';
import { SuperComponent } from './ads/super/super.component';
import { UltraComponent } from './ads/ultra/ultra.component';

const routes: Routes = [
  { path: '', component: SimulatorComponent, pathMatch: 'full'},
  { path: 'ads-pro', component : ProComponent },
  { path: 'ads-ultra', component : UltraComponent },
  { path: 'ads-super', component : SuperComponent },
  { path: 'ads-advanced', component : AdvancedComponent },
  { path: 'ads-standard', component : StandardComponent },
  { path: 'ads-starter', component : StarterComponent} 
];

export const ROUTES = RouterModule.forChild(routes);
