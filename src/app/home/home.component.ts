import { Component } from '@angular/core';
import { ProductCategory } from '../shared/interfaces/interfaces';
import { DataAccessService } from '../core/services/data-access/data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productCategories: ProductCategory[] = [];
  public isAddCard: boolean = false;

  constructor(private data: DataAccessService) { }

  ngOnInit() {
    this.data.getProductCategories$.subscribe({
      next: (productTypes) => {
        this.productCategories = productTypes
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
    this.data.getProducts$.subscribe({
      next: (products) => {
        console.log(products,'produkty?')
        // potem przypisz lokalna tablice do tychproduktow i wyswietl
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }
}
