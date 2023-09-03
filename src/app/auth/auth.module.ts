import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RegistrationComponent } from '../shared/ui/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './ui/login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    // RegistrationComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
