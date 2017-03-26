import { Component, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'simulator-ads',
  styleUrls: [ './simulator.style.scss'
              //, '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
              ],
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
  _lstAds: Array<any>;


  constructor() {
  }

  ngOnInit() {
    //TODO: Call of Service  
    this._lstAds = new Array<any>();
    this._lstAds.push({id: 'default', name: '-- Seleccione --'});
    this._lstAds.push({id: 'ads-Pro', name: 'Pro Ad Pack'});
    this._lstAds.push({id: 'ads-Ultra', name: 'Ultra Yellow Ad Pack'});
    this._lstAds.push({id: 'ads-Super', name: 'Super Yellow Ad Pack'});
    this._lstAds.push({id: 'ads-Advanced', name: 'Advanced'});
    this._lstAds.push({id: 'ads-Standard', name: 'Standard'});
    this._lstAds.push({id: 'ads-Starter', name: 'Starter'});
    this.clearAdsOptions();
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

  public selectValue(value: any){
    //console.log(value);
    this.clearAdsOptions();    
    switch (value) {
      case 'default':
        this._showDefault = true;
        break;
    case 'ads-Pro':
      this._showProAdPack = true;;
      break;
    case 'ads-Ultra':
      this._showUltraYellowAdPack = true;;
      break;
    case 'ads-Super':
      this._showSuperYellowAdPack = true;;
      break;
    case 'ads-Advanced':
      this._showAdvance = true;;
      break;
    case 'ads-Standard':
      this._showStandard = true;;
      break;
    case 'ads-Starter':
      this._showStarter = true;;
      break;
    default:
      this._showDefault = true;;
      break;
    }
  }
}
