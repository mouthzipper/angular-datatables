import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import 'jquery';
import 'datatables.net';
declare var $: any;

@Directive({
  selector: '[datatable]'
})
export class DataTableDirective implements OnInit {
  private el: ElementRef;

  @Input()
  dtOptions: any;

  /**
   * The DataTable instance built by the jQuery library [DataTables](datatables.net).
   *
   * It's possible to execute the [DataTables APIs](https://datatables.net/reference/api/) with
   * this variable.
   */
  dtInstance: any;

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
    this.dtOptions = $.extend(true, {}, $.fn.DataTable.defaults);
  }

  ngOnInit(): any {
    this.dtInstance = $(this.el.nativeElement).DataTable(this.dtOptions);
  }
}
