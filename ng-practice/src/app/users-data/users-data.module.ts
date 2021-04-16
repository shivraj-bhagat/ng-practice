import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    LoginComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    UsersListComponent
  ]
})
export class UsersDataModule { }
