import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>
  vv: number
  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.users
    this.vv = this.userService.test
  }

  ngOnInit(): void {
  }

}
