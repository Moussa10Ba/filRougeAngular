import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {UsersListComponent} from './users/users-list/users-list.component';

const routes: Routes = [
 {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: 'listUsers', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
