import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import  {LoginModel} from '../../models/shared/login-model';
//import {UsernameValidatorDirective} './username-validator.directive.ts'
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  payload :LoginModel ;
  loginform: FormGroup = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
     // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
     // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
  });

  submit() {
    if (this.loginform.valid) {
     // this.submitEM.emit(this.form.value); 
    
     
     this.payload.setUsername(this.loginform.get('username').value);
     this.payload.setUsername( this.loginform.get('password').value);
     console.log(this.payload.getUsername());
    // payload.setUS

    }
  }

  @Input() error: string | null;

  //@Output() submitEM = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.payload =new LoginModel();
  }

  getLoginDetails(){
     var user :{username:'', password:''};
   // user.username = this.loginform.get('username');
   // user.password = this.loginform.get('password');

  }

}
