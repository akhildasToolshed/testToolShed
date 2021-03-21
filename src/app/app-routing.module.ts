import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page.component';


const routes: Routes = [
 {
    path : 'user',
    loadChildren: () => import('./loginModule/login.module').then(m => m.LoginModule)
  },
  {
    path:'errorPage',
    component: ErrorPageComponent,
    pathMatch:'full' 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
