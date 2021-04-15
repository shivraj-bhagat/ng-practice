import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CommonComponent
  }, {
    path: 'user',
    component: UsersComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
