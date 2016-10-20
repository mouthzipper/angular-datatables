import { ElementRef, OnInit } from '@angular/core';
import 'jquery';
import 'datatables.net';
export declare class DataTableDirective implements OnInit {
    private el;
    dtOptions: any;
    /**
     * The DataTable instance built by the jQuery library [DataTables](datatables.net).
     *
     * It's possible to execute the [DataTables APIs](https://datatables.net/reference/api/) with
     * this variable.
     */
    dtInstance: any;
    constructor(el: ElementRef);
    ngOnInit(): any;
}
