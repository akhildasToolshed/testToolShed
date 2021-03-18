import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
    path : '',
    component: LoginComponentComponent,
    pathMatch:'full'
  },{
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoginRoutingModule { }
