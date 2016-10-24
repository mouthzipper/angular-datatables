import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'with-ajax',
  templateUrl: 'with-ajax.component.html'
})
export class WithAjaxComponent implements OnInit {
  dtOptions: any = {};

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
