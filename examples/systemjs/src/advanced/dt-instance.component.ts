import { Component, ViewChild, OnInit } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

@Component({
  moduleId: module.id,
  selector: 'dt-instance',
  templateUrl: 'dt-instance.component.html'
})
export class DtInstanceComponent implements OnInit {
  @ViewChild(DataTableDirective)
  private datatableEl: DataTableDirective;

  dtOptions: any = {};

  displayToConsole(): void {
    this.datatableEl.dtInstance.then(dtInstance => console.log(dtInstance));
  }

  ngOnInit(): void {
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
      }]
    };
  }
}
