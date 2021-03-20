import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import  {LoginRoutingModule} from './login-routing.module';
import { SignupComponent } from './signup/signup.component'; 
import {MaterialModule}  from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [LoginComponentComponent, SignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LoginModule { }
