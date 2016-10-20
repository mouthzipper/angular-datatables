import { Component, ViewChild } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

@Component({
  moduleId: module.id,
  selector: 'dt-instance',
  templateUrl: 'dt-instance.component.html'
})
export class DtInstanceComponent {
  @ViewChild(DataTableDirective)
  private datatable: DataTableDirective;

  dtOptions: any = {};

  constructor() {
    this.dtOptions = {
      ajax: 'data.json',
      ajaxDataProp: '',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

  foobar(): void {
    console.log(this.datatable);
  }
}
