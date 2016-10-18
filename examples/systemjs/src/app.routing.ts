import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZeroConfigComponent } from './basic/zero-config.component';
import { WithOptionsComponent } from './basic/with-options.component';
import { WithAjaxComponent } from './basic/with-ajax.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/zero-config',
    pathMatch: 'full'
  },
  {
    path: 'zero-config',
    component: ZeroConfigComponent
  },
  {
    path: 'with-options',
    component: WithOptionsComponent
  },
  {
    path: 'with-ajax',
    component: WithAjaxComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
