import { NgModule } from '@angular/core';
import { DataTableDirective } from './angular-datatables.directive';

@NgModule({
  declarations: [ DataTableDirective ],
  exports: [ DataTableDirective ]
})
export class DataTablesModule {}
