import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolComponent } from './tool.component';
//TODO: Ponerlo en un archivo aparte
export const routes = [
  { path: '', component: ToolComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ToolComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ToolModule {
  static routes = routes;
}