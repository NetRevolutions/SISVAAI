import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from '../../app.service';

@Component({
  selector: 'tool',
  styleUrls: [ './tool.style.scss'],
  templateUrl: './tool.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'tool-page app'
  }
})
export class ToolComponent {

  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial Tool State', this.appState.state);
  }
}
