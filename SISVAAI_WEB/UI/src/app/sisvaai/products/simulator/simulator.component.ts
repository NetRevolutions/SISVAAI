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
  _showDefault: boolean = true;
  _showProAdPack: boolean = false;
  _showUltraYellowAdPack: boolean = false;
  _showSuperYellowAdPack: boolean = false;
  _showAdvance: boolean = false;
  _showStandard: boolean = false;
  _showStarter: boolean = false; 


  constructor(
    ) {
  }

  ngOnInit() {       
    //this.clearAdsOptions();

  }

  public clearAdsOptions(){
    this._showDefault = true;
    this._showProAdPack = false;
    this._showUltraYellowAdPack = false;
    this._showSuperYellowAdPack = false;
    this._showAdvance = false;
    this._showStandard = false;
    this._showStarter = false; 
  }
}
