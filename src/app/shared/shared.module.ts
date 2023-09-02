import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './ui/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations:
    [
      RegistrationComponent,
    ],
  imports:
    [
      CommonModule,
      ReactiveFormsModule ,
    ],
  exports:
    [
      RegistrationComponent
    ],
})
export class SharedModule { }
