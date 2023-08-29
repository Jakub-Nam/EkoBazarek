import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api-eko-bazarek.azurewebsites.net/api/products')
      .subscribe({
        next: (productTypes) => {
          console.log(productTypes)
        },
        error: (err: Error) => console.error('Observer got an error: ' + err),
      });

  }
}
