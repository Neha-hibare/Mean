
import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
//import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'app-user-edit',
  moduleId: module.id,
  templateUrl: 'user-edit.component.html'
  
})
export class UserEditComponent implements OnInit {
  public user;
  errorMessage: string;
 
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.user = <User>{};
    
  }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(
      user => this.user = user,
      error => this.errorMessage = <any> error);
  }

  onSubmit(user) {
  const user_id = this.user._id;
  console.log("on subm"+user.pincode + "user_id"+user_id);
   var that = this;
    this.userService.updateUser(user_id, user).subscribe(
      get_result,
      get_error
    );

    function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }

    function get_result(update_status) {
      console.log(update_status);
      if (update_status.status === 204) {
        console.log('update failed');
       // that.gotoUserDetail(user);
      } else {
        return console.log('update success');
      }
    }
  };

  gotoUserDetail(user: User) {
    const userId = this.route.snapshot.params['id'];
    this.router.navigate(['/users', userId]);
  }



}