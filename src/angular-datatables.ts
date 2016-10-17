export {DTOptions} from './angular-datatables.dtOptions';

import {NgModule} from '@angular/core';
import {DataTable} from './angular-datatables.directive';

@NgModule({
  declarations: [DataTable],
  exports: [DataTable]
})
export class DataTablesModule {}
