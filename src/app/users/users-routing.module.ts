

import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserDetailComponent} from './user-details/user-details.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserAddComponent} from './user-add/user-add.component';

const userRouting: ModuleWithProviders = RouterModule.forChild([
  {path: 'users', component: UserListComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'users/:id/edit', component: UserEditComponent},
]);

@NgModule({
  //imports: [RouterModule.forChild(userRoutes)],
  imports: [
    userRouting
  ],
  exports: [RouterModule]
})

export class UsersRoutingModule {
}
