import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ProductCategory {
  iconUrl: string,
  id: string,
  name: string,
  type: string,
};

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  public productCategories: ProductCategory[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
    .subscribe({
      next: (productTypes) => {
        this.productCategories = productTypes
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }
}