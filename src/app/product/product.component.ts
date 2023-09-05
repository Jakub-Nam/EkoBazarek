import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductTypes } from '../shared/interfaces/interfaces';
import { shareReplay, tap } from 'rxjs';
import { DataAccessService } from '../shared/services/data-access/data-access.service';

interface ProductCategory {
  id: string,
  iconUrl: string,
  name: string,
  type: string
}

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productTypes: ProductTypes[] = [];
  public productCategories: ProductCategory[] = [];


  constructor(public data: DataAccessService) { }

  ngOnInit() {
    // this.http.get<any>('https://api-eko-bazarek.azurewebsites.net/api/products')

    this.data.getProductTypes$.subscribe({
      next: (productTypes) => {
        this.productTypes = productTypes
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
    // this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
    //   .subscribe({
    //     next: (productCategories) => {
    //       console.log(productCategories)
    //       this.productCategories = productCategories
    //     },
    //     error: (err: Error) => console.error('Observer got an error: ' + err),
    //   });

  }
}
