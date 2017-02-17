import { Routes, RouterModule } from '@angular/router';
import { SimulatorComponent } from './simulator.component';

const routes: Routes = [
    {path: '', component: SimulatorComponent, children: [

    ]}
];

export const ROUTES = RouterModule.forChild(routes);