import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component'

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
];

// for group routing 
// const routes: Routes = [
//   {
//     path: 'user',
//     children: [
//       {
//         path: 'list',
//         component: ListComponent
//       }, {
//         path: 'login',
//         component: LoginComponent
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
