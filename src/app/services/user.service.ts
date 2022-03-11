import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public readonly users: Observable<User[]> = this._users.asObservable()
  public test = 123

  set usersValue(v: User[]){
    this._users.next(v)
  }

  get usersValue(): any[]{
    return this._users.getValue()
  }
  
  constructor() {
    const DEFAULT_USER = new User('Alex', 'Ivanov', '2022-02-02', 'none')
    this.usersValue = [DEFAULT_USER]
  }

  addUser(user: User){
    const users = this.usersValue;
    users.push(user)
    this.usersValue = users
  }
}
