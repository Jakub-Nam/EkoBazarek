import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TypeListComponent } from './ui/type-list/type-list.component';
import { CategoryListComponent } from './ui/category-list/category-list.component';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const materialComponents: unknown[] =
  [
    MatListModule,
    MatMenuModule,
  ]

@NgModule({
  declarations: [
    ProductComponent,
    TypeListComponent,
    CategoryListComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    materialComponents
  ]
})
export class ProductModule { }
