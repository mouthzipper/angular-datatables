import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import 'jquery';
import 'datatables.net';
declare var $: any;

@Directive({
  selector: '[datatable]'
})
export class DataTable implements OnInit {
  el: ElementRef;

  constructor(@Inject(ElementRef) el: ElementRef) {
    this.el = el;
  }

  ngOnInit(): any {
    $(this.el.nativeElement).DataTable();
  }
}
