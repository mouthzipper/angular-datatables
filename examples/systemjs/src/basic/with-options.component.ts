import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'with-options',
  templateUrl: 'with-options.component.html'
})
export class WithOptionsComponent {
  dtOptions: any = {};

  constructor() {
    this.dtOptions.displayLength = 2;
    this.dtOptions.paginationType = 'full_numbers';
  }
}
