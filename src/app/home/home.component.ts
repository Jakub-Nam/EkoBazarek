import { Component } from '@angular/core';
import { ProductCategory, ProductResponseData } from '../shared/interfaces/interfaces';
import { DataAccessService } from '../core/services/data-access/data-access.service';
import { SignalProductsService } from '../core/services/signal-products/signal-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productCategories: ProductCategory[] = [];
  public isAddCard: boolean = false;
  public products!: ProductResponseData[];
  constructor(private data: DataAccessService, private signalProdcutsService: SignalProductsService) { }

  ngOnInit() {

    this.data.getProductCategoriesTop$.subscribe({
      next: (productCat) => {
        this.productCategories = productCat
      }
    });

    this.data.getProducts$.subscribe({
      next: (products) => {
        console.log(products,'products?')
      }
    });
    this.products = this.signalProdcutsService.signalProducts();
  }
}
