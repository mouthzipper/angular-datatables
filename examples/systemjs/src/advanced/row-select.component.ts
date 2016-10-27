import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
    template: '<div #dynamicTarget></div>'
})
export class InjectedWrapperComponent {
    // Component input
    @ViewChild('dynamicTarget', { read: ViewContainerRef })
    private dynamicTarget: any;
}

@Component({
  moduleId: module.id,
  selector: 'row-select',
  templateUrl: 'row-select.component.html'
})
export class RowSelectComponent implements OnInit {
  dtOptions: any = {};
  selected: any = {};
  selectAll: boolean = false;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    let titleHtml = '<input type="checkbox" [(ngModel)]="selectAll"' +
        '(click)="toggleAll(selectAll, selected)">';

    let self = this;
    this.dtOptions = {
      ajax: 'data1.json',
      order: [[1, 'asc']],
      createdRow: (row: Node, data: any, dataIndex: number) => {
        let componentFactory = self.resolver.resolveComponentFactory
      },
      columns: [{
        title: titleHtml,
        data: null,
        sortable: false,
        render: (data: any, type: string, full: any, meta: Object) => {
          self.selected[full.id] = false;
          return '<input type="checkbox" [(ngModel)]="selected[' + data.id + ']" (click)="toggleOne(selected)"/>';
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
