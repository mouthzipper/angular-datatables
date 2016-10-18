import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ZeroConfigComponent }  from './basic/zero-config.component';
import { WithOptionsComponent }  from './basic/with-options.component';
import { WithAjaxComponent }  from './basic/with-ajax.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    ZeroConfigComponent,
    WithOptionsComponent,
    WithAjaxComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
