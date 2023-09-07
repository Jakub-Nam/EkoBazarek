import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TypeListComponent } from './ui/type-list/type-list.component';
import { CategoryListComponent } from './ui/category-list/category-list.component';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AddProductComponent } from './ui/add-product/add-product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';

import {MatSelectModule} from '@angular/material/select';

const materialComponents: unknown[] =
  [
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule
  ];

@NgModule({
  declarations: [
    ProductComponent,
    TypeListComponent,
    CategoryListComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    // ReactiveFormsModule,
    // FormsModule,

    materialComponents
  ]
})
export class ProductModule { }
