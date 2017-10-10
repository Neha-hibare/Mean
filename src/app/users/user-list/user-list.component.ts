
import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

import {Router} from '@angular/router';


@Component({
  selector: 'app-user-list',
  moduleId: module.id,
  templateUrl: 'user-list.component.html'
  
})
export class UserListComponent implements OnInit {
  errorMessage: string;
  users: User[];
  userList = [
	    {id: '1', userName: 'John', email: 'John@gmail.com', phone: '8907654321', address: 'Super Market Gulbarga'},
	    {id: '2', userName: 'Joe', email: 'Joe@gmail.com', phone: '8907654781', address: 'Market  Gulbarga'},
	    {id: '3', userName: 'Anu', email: 'Anu@gmail.com', phone: '8907654790', address: 'SB Temple  Gulbarga'}
	  ];
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = <any> error);
  }

  onSelect(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

}