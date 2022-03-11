import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServiceMock } from '../mocks/user.service.mock';
import { UserService } from '../services/user.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [
        {provide: UserService, useClass: UserServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have one user', () => {
    expect(component.vv).toEqual(123)
  });
});
