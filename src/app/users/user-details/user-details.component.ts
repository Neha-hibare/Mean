

import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../user';
//import {Observable} from 'rxjs';



@Component({
  selector: 'app-user-detail',
  moduleId: module.id,
  templateUrl: 'user-details.component.html'
  
})
export class UserDetailComponent implements OnInit {
  errorMessage: string;
  user: User;
  /*user = {
  id : 1,
  firstName : 'ABC',
  lastName : 'BCD'
  }*/
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = <User>{};
  }

  ngOnInit() {
   const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(
      user => this.user = user,
      error => this.errorMessage = <any> error);
  }

  gotoUsersList() {
    this.router.navigate(['/users']);
  }

  editUser() {
    const userId = this.route.snapshot.params['id'];
    this.router.navigate(['/users', userId, 'edit']);
  }

 


}
