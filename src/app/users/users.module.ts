
import {NgModule} from '@angular/core';
import {UserService} from './user.service';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-details/user-details.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UsersRoutingModule} from './users-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserAddComponent
  ],
  providers: [UserService]

})

export class UsersModule {
}
