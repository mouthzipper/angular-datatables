import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, DataTablesModule ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
