import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedRoutingModule } from './shared-routing.module';




@NgModule({
  declarations: [MainNavComponent, SideNavComponent],
  imports: [
    CommonModule,SharedRoutingModule
  ], 
  exports : [
    MainNavComponent ,SharedRoutingModule
  ]
})
export class SharedModule { }
