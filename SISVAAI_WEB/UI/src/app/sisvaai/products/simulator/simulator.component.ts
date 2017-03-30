import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

declare var jQuery: any;
interface Ads {
  id:string
  , name: string
};

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
  selectedItem: Ads;
  el: ElementRef;

  _lstAds: Ads[] = [
    {id: 'default', name: '-- Seleccione --'}
    , {id: 'ads-Pro', name: 'Pro Ad Pack'}
    , {id: 'ads-Ultra', name: 'Ultra Yellow Ad Pack'}
    , {id: 'ads-Super', name: 'Super Yellow Ad Pack'}
    , {id: 'ads-Advanced', name: 'Advanced'}
    , {id: 'ads-Standard', name: 'Standard'}
    , {id: 'ads-Starter', name: 'Starter'}
  ];

  constructor(
    el:ElementRef
  ) {
    this.el = el;
  }

  ngOnInit() {
    let that = this;
    let $el = jQuery(this.el.nativeElement);
    let defaultValue : string = 'default';
    //TODO: Call of Service  
    this.clearAdsOptions();
    this.changeAds(defaultValue);

    $el.find('#ddlADS').select().on("select", function(e){
      debugger;
      that.selectedItem.id = jQuery(that).val();
    });
  }

  public clearAdsOptions(){
    this._showDefault = false;
    this._showProAdPack = false;
    this._showUltraYellowAdPack = false;
    this._showSuperYellowAdPack = false;
    this._showAdvance = false;
    this._showStandard = false;
    this._showStarter = false; 
  }

  public updateSelectedValue(id:string): void {
    debugger;
    this.selectedItem = this._lstAds.find(x => x.id == id);//JSON.parse(event); 
    this.changeAds(this.selectedItem.id);
  }

  public changeAds(id: string): void {
    this.clearAdsOptions();    
    switch (id) {
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

  public changeValueAds(id: string): void{
    //debugger;
    //id = 'ads-Pro'; //Replace by service
    let currentSelectedItem = this._lstAds.find(x => x.id == 'ads-Pro');
    let currentValue = jQuery('#ddlADS').val();

    jQuery('#ddlADS').val(currentSelectedItem.id);
    this.updateSelectedValue(currentSelectedItem.id);


    //this.selectedItem = this._lstAds.find(x => x.id == 'ads-Pro');

    //jQuery(this.el.nativeElement).find('#ddlADS').select(this.selectedItem).change();
    //jQuery(this.el.nativeElement).find('#ddlADS option[value="ads-Pro"]').attr('selected', 'selected');
    
    //console.log(jQuery(this.el.nativeElement).find('#ddlADS').val());
    //console.log(jQuery(this.el.nativeElement).find('#ddlADS').select();
    //console.log(jQuery(this.el.nativeElement).find('#ddlADS').select2());
    /*
    jQuery(this.el.nativeElement).find('#ddlADS option').each(function(){
      if($(this).val() == 'ads-Pro')
        $(this).prop("selected", true);
    })
    */

  }
}
