import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule}  from './material/material.module';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './shared/error-page.component';


//import { UsernameValidatorDirective } from './logiModule/username-validator.directive';

@NgModule({
  declarations: [
    AppComponent,MainNavComponent, ErrorPageComponent,  //UsernameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
