import { Component } from '@angular/core';

import {DTOptions} from 'angular-datatables';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  dtOptions: DTOptions;

  constructor() {
    this.dtOptions = new DTOptions();
    console.log(this.dtOptions);
  }
}
