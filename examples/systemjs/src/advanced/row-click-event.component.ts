import { Component, NgZone, OnInit } from '@angular/core';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'row-click-event',
  templateUrl: 'row-click-event.component.html'
})
export class RowClickEventComponent implements OnInit {
  message: string = '';
  dtOptions: any = {};

  constructor(private zone: NgZone) { }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }

  ngOnInit(): any {
    this.dtOptions = {
      ajax: 'data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      rowCallback: (nRow: number, aData: any, iDisplayIndex: number, iDisplayIndexFull: number) => {
        let self = this;
        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', nRow).unbind('click');
        $('td', nRow).bind('click', () => {
          self.someClickHandler(aData);
        });
        return nRow;
      }
    };
  }
}

