import { Directive, ElementRef, Inject, OnInit, Input } from '@angular/core';
import 'jquery';
import 'datatables.net';
declare var $: any;

@Directive({
  selector: '[datatable]'
})
export class DataTable implements OnInit {
  el: ElementRef;
  @Input()
  dtOptions: any;

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
    this.dtOptions = $.extend(true, {}, $.fn.DataTable.defaults);
  }

  ngOnInit(): any {
    $(this.el.nativeElement).DataTable(this.dtOptions);
  }
}
