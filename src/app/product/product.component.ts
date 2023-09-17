import { Component, OnInit, Signal } from '@angular/core';
import { ProductCategory, ProductTypes, ProductUnit, ProductResponseData } from '../shared/interfaces/interfaces';
import { DataAccessService } from '../core/services/data-access/data-access.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../shared/ui/add-product/add-product.component';
import { SignalProductsService } from '../core/services/signal-products/signal-products.service';
@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public isProducts: boolean = true;
  public productTypes!: ProductTypes[];
  public productFilteredTypes!: ProductTypes[];
  public productCategories!: ProductCategory[];
  public filteredProductCategories!: ProductCategory[];
  public filteredProducts!: ProductResponseData[];
  public productUnits!: ProductUnit[];
  public allSelected: boolean = true;
  public searchTerm: string = '';
  public selectedCategory: string | null = "CHICKEN";

  constructor(public dataAccess: DataAccessService, public dialog: MatDialog, private signalProductsService: SignalProductsService) { }

  ngOnInit(): void {
    this.filteredProducts = this.signalProductsService.signalProducts();
    this.dataAccess.getProductTypes$.subscribe({
      next: (productTypes) => {
        this.productTypes = productTypes;
        this.productFilteredTypes = productTypes;
      }
    });

    this.dataAccess.getProductCategories$.subscribe({
      next: (productCategories) => {
        this.productCategories = productCategories;
        this.filteredProductCategories = productCategories;
      }
    });

    this.dataAccess.getProductUnits$.subscribe({
      next: (productUnits) => {
        this.productUnits = productUnits;
      }
    });
  }

  public filterProductsAndCategories(selectedType: string[]): void {
    this.filterCategoriesByType(selectedType);
    this.filterProductsByType(selectedType);
  }

  public filterProductsByType(selectedType: string[]): void { 
    // if checked -> true = return filtered, false all
    this.filteredProducts = this.signalProductsService.signalProducts().filter(product =>
      selectedType.includes(product.type)
    );
  }

  public filterCategoriesByType(selectedType: string[]): void {
    this.filteredProductCategories = this.productCategories.filter(category =>
      selectedType.includes(category.type)
    );
  }

  public filterByCategories(selectedCategory: string): ProductResponseData[] {
    return this.filteredProducts = this.signalProductsService.signalProducts().filter(product => {
      if (product.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }

  public toggleView(boolean: boolean): void {
    this.isProducts = boolean;
  }

  public filterProductsByName(): void {
    this.filteredProducts = this.signalProductsService.signalProducts().filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: { name: 'this.name', animal: 'this.animal' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}