import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddProductComponent } from '../shared/ui/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    pathMatch: 'full'
  },

  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
