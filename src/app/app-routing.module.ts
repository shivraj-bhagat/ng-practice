import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './users-data/login/login.component';
import { UsersListComponent } from './users-data/users-list/users-list.component';

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
    path: 'list',
    component: UsersListComponent
  }, {
    path: 'login',
    component: LoginComponent
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
