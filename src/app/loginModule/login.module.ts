import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import  {LoginRoutingModule} from './login-routing.module';
import { SignupComponent } from './signup/signup.component'; 


@NgModule({
  declarations: [LoginComponentComponent, SignupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    LoginRoutingModule
  ]
})
export class LoginModule { }
