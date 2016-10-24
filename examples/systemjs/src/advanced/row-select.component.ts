import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'row-select',
  templateUrl: 'row-select.component.html'
})
export class RowSelectComponent implements OnInit {
  dtOptions: any = {};
  selected: any = {};
  selectAll: boolean = false;

  ngOnInit(): void {
    let titleHtml = '<input type="checkbox" ng-model="showCase.selectAll"' +
        'ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';
    let self = this;
    this.dtOptions = {
      ajax: 'data1.json',
      columns: [{
        title: titleHtml,
        data: null,
        sortable: false,
        render: (data: any, type: string, full: any, meta: Object) => {
          self.selected[full.id] = false;
          return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)"/>';
        }
      }, {
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

  toggleAll(selectAll: boolean, selectedItems: any): void {
    for (let id in selectedItems) {
      if (selectedItems.hasOwnProperty(id)) {
        selectedItems[id] = selectAll;
      }
    }
  }

  toggleOne(selectedItems: any): void {
    for (let id in selectedItems) {
      if (selectedItems.hasOwnProperty(id)) {
        if (!selectedItems[id]) {
          this.selectAll = false;
          return;
        }
      }
    }
    this.selectAll = true;
  }
}
