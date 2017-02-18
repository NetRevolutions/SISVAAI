import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'simulator',
    templateUrl: './simulator.template.html'
})
export class SimulatorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}