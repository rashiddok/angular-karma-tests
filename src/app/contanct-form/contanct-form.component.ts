import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-contanct-form',
  templateUrl: './contanct-form.component.html',
  styleUrls: ['./contanct-form.component.scss']
})
export class ContanctFormComponent{

  userForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    const DATE_REG = /\d{4}-\d{2}-\d{2}/
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateofbirth: new FormControl('', [Validators.required, Validators.pattern(DATE_REG)]),
      notes: new FormControl('')
    })
  }

  onSubmit(){
    const userData: User = this.userForm.value
    this.userService.addUser(userData)
    this.router.navigateByUrl('/')
    this.submitted = true
  }

}
