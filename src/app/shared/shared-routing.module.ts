import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'login',
    loadChildren: () => import('../loginModule/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
})
export class SharedRoutingModule { }
