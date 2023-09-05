import { Component } from '@angular/core';
import { ProductCategory } from '../shared/interfaces/interfaces';
import { DataAccessService } from '../shared/services/data-access/data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productCategories: ProductCategory[] = [];
  

  constructor(private data: DataAccessService) { }

  ngOnInit() {
    this.data.getProductCategories$.subscribe({
      next: (productTypes) => {
        this.productCategories = productTypes
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }
}
