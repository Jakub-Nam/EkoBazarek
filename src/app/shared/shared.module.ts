import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './ui/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PassValidationComponent } from './ui/pass-validation/pass-validation.component';

const materialComponents: unknown[] = 
[
  MatIconModule,
]

@NgModule({
  declarations:
    [
      RegistrationComponent,
      PassValidationComponent,
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
