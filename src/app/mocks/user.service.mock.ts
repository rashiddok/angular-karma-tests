import { Observable, of } from "rxjs";
import { User } from "../models/User";

export class UserServiceMock{
    users: Observable<User[]>
    test = 123
    constructor(){
        const u: User = new User('Alex', 'Ivanov', '2022-02-02', 'none')
        this.users = of([u])
    }
}