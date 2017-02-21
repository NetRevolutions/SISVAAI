import { Component, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'simulator',
  styleUrls: [ './simulator.style.scss' ],
  templateUrl: './simulator.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'simulator-page simulator'
  }
})
export class SimulatorComponent {

  constructor(
    ) {
  }

  ngOnInit() {       

  }
}
