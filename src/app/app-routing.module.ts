import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
    path : 'login',
    loadChildren: () => import('./loginModule/login.module').then(m => m.LoginModule)
  },
  {
    path : 'signup',
    loadChildren: () => import('./loginModule/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
