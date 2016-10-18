import { ElementRef, OnInit } from '@angular/core';
import 'jquery';
import 'datatables.net';
export declare class DataTable implements OnInit {
    el: ElementRef;
    dtOptions: any;
    constructor(el: ElementRef);
    ngOnInit(): any;
}
