import { Component, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { AppState } from '../../app.service';

@Component({
    moduleId: module.id,
    selector: 'products',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./products.style.scss'],
    templateUrl: './products.template.html',
    host:{
        class: 'products-page page'
    }
})
export class ProductsComponent {
    showTabs: boolean = false;
    _path: string = '';
    constructor(
        public appState: AppState
    , private route: ActivatedRoute
    ) { }

    ngOnInit() { 

        console.log('Initial Simualtor State', this.appState.state);
    
        let userName = this.route.snapshot.params['userName'];
        console.log('UserName is: ' + userName);

        if(userName != undefined)
        {
            this._path = 'products/' + userName;
            this.showTabs = true;
        }            
        else
        {
            this._path = '';
            this.showTabs = false;
        }            
        
    }
}