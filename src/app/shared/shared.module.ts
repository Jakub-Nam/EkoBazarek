import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './ui/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ProductListComponent } from './ui/product-list/product-list.component';

const materialComponents: unknown[] = 
[
  MatIconModule,
]
@NgModule({
  declarations:
    [
      RegistrationComponent,
      ProductListComponent
    ],
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      materialComponents
    ],
  exports:
    [
      RegistrationComponent,
      ProductListComponent
    ],
})
export class SharedModule { }
