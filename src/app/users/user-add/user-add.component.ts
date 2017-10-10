

import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
//import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { EmailValidator } from '../../validators/email';
@Component({
  selector: 'app-user-add',
  moduleId: module.id,
  templateUrl: 'user-add.component.html'
  
})
export class UserAddComponent implements OnInit {

  user: User;
  
  errorMessage: string;
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.user = <User>{};
   
  }

  ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
       // this.userForm.patchValue(this.user);
    }

  onSubmit(user: User) {
    console.log(user.username);
    //user.id = null;
    this.userService.addUser(user).subscribe(
      new_user => {
        this.user = new_user;
        this.gotoUsersList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoUsersList() {
    this.router.navigate(['/users']);
  }

}
