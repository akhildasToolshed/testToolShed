import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/shared/login/login.service';
import  {LoginModel} from '../../models/shared/login-model';
import { first } from 'rxjs/operators';

import { of } from 'rxjs';
//import {UsernameValidatorDirective} './username-validator.directive.ts'
//import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  private payload :LoginModel ;
   loginform: FormGroup = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(7),
    ]),
  });
  
  private userHomeUrl:String;
  private errorurl : String = '/errorPage'; 

  submit() {
    if (this.loginform.valid) {
     // this.submitEM.emit(this.form.value); 
      this.payload.setUsername(this.loginform.get('username').value);
      this.payload.setPassword( this.loginform.get('password').value);
      console.log(this.payload.getUsername());
      this.loginService.login(this.payload) .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.userHomeUrl]);
          },
          error => {
            this.router.navigate([this.errorurl]);
             // this.alertService.error(error);
             // this.loading = false;
          });

      ;
    }
  }

  @Input() error: string | null;

  //@Output() submitEM = new EventEmitter();

  constructor( private loginService : LoginService, private router: Router
    ) {

   }

  ngOnInit(): void {

    this.payload =new LoginModel();
  }

}
