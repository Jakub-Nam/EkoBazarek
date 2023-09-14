import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TypeListComponent } from './ui/type-list/type-list.component';
import { CategoryListComponent } from './ui/category-list/category-list.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';

const materialComponents: unknown[] =
  [
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    MatCheckboxModule,
  ];

@NgModule({
  declarations: [
    ProductComponent,
    TypeListComponent,
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    materialComponents,
    FormsModule,
    SharedModule
  ]
})
export class ProductModule { }
