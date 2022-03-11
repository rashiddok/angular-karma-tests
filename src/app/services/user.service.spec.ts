import { TestBed } from '@angular/core/testing';
import { User } from '../models/User';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be equal two', () => {
    const u = new User('Aaa', 'fff', '2022-02-123', '')
    service.addUser(u)
    expect(service.usersValue.length).toEqual(2)
  });
});
