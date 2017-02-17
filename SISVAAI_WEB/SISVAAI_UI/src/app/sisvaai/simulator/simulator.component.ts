import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../../app.config';

declare var jQuery: any;
declare var Hammer: any;
declare var Raphael: any;

@Component({
    selector: 'simulator',
    templateUrl: './simulator.template.html',
    host: {
    '[class.nav-static]' : 'config.state["nav-static"]',
    '[class.chat-sidebar-opened]' : 'chatOpened',
    '[class.app]' : 'true',
    id: 'app'
  }
})
export class SimulatorComponent {
    config: any;
    configFn: any;
    $sidebar: any;
    el: ElementRef;
    router: Router;
    chatOpened: boolean = false;
    constructor(config: AppConfig,
              el: ElementRef,
              router: Router) { 
        Raphael.prototype.safari = function(): any { return; };
        this.el = el;
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
    }

    ngOnInit() { }
}