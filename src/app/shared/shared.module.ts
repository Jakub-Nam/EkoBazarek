import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './ui/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


const materialComponents: unknown[] = 
[
  MatIconModule,
]

@NgModule({
  declarations:
    [
      RegistrationComponent,
    ],
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      materialComponents
    ],
  exports:
    [
      RegistrationComponent
    ],
})
export class SharedModule { }
