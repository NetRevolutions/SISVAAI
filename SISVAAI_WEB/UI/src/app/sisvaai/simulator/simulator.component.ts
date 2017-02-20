import { Component, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { AppState } from '../../app.service';

@Component({
  selector: 'simulator',
  styleUrls: [ './simulator.style.scss'],
  templateUrl: './simulator.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'simulator-page simulator'
  }
})
export class SimulatorComponent {

  constructor(
    public appState: AppState
    , private route: ActivatedRoute 
    ) {
  }

  ngOnInit() {
    console.log('Initial Simualtor State', this.appState.state);
    
    let userName = this.route.snapshot.params['userName'];
    console.log('UserName is: ' + userName);
  }
}
