import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZeroConfigComponent } from './basic/zero-config.component';
import { WithOptionsComponent } from './basic/with-options.component';
import { WithAjaxComponent } from './basic/with-ajax.component';

import { DtInstanceComponent } from './advanced/dt-instance.component';
import { RowClickEventComponent } from './advanced/row-click-event.component';
import { RowSelectComponent } from './advanced/row-select.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/basic/zero-config',
    pathMatch: 'full'
  },
  {
    path: 'basic/zero-config',
    component: ZeroConfigComponent
  },
  {
    path: 'basic/with-options',
    component: WithOptionsComponent
  },
  {
    path: 'basic/with-ajax',
    component: WithAjaxComponent
  },
  {
    path: 'advanced/dt-instance',
    component: DtInstanceComponent
  },
  {
    path: 'advanced/row-click-event',
    component: RowClickEventComponent
  },
  {
    path: 'advanced/row-select',
    component: RowSelectComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
