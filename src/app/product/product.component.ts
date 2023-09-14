import { Component, OnInit } from '@angular/core';
import { ProductCategory, ProductTypes, ProductUnit, ProductResponseData } from '../shared/interfaces/interfaces';
import { DataAccessService } from '../core/services/data-access/data-access.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../shared/ui/add-product/add-product.component';
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
  public products: ProductResponseData[] =
    [
      {
        id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
        name: "Jęczmień eko",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis auctor arcu. Vivamus interdum diam turpis, ac rutrum sem facilisis eget. Proin enim odio, egestas eget tellus ut, vestibulum lobortis felis. Nunc tortor felis, dignissim at purus at, auctor vehicula leo. Donec ornare mattis mauris non volutpat. Vestibulum faucibus fermentum tellus, non sagittis tortor ultrices et. Quisque et elementum quam.",
        price: 0,
        type: "CEREALS",
        category: "BARLEY",
        unit: "t",
        createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
        createDate: 1690093259833
      },
      {
        id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
        name: "Jęczmień eko",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis auctor arcu. Vivamus interdum diam turpis, ac rutrum sem facilisis eget. Proin enim odio, egestas eget tellus ut, vestibulum lobortis felis. Nunc tortor felis, dignissim at purus at, auctor vehicula leo. Donec ornare mattis mauris non volutpat. Vestibulum faucibus fermentum tellus, non sagittis tortor ultrices et. Quisque et elementum quam.",
        price: 0,
        type: "CEREALS",
        category: "RYE",
        unit: "t",
        createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
        createDate: 1690093259833
      },
      {
        id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
        name: "Skrzydełka",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis auctor arcu. Vivamus interdum diam turpis, ac rutrum sem facilisis eget. Proin enim odio, egestas eget tellus ut, vestibulum lobortis felis. Nunc tortor felis, dignissim at purus at, auctor vehicula leo. Donec ornare mattis mauris non volutpat. Vestibulum faucibus fermentum tellus, non sagittis tortor ultrices et. Quisque et elementum quam.",
        price: 0,
        type: "MEAT",
        category: "PORK",
        unit: "t",
        createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
        createDate: 1690093259833
      }
    ]

  public selectedCategory: string | null = "CHICKEN";

  constructor(public dataAccess: DataAccessService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filteredProducts = this.products;
    this.dataAccess.getProductTypes$.subscribe({
      next: (productTypes) => {
        this.productTypes = productTypes;
        this.filteredProducts = this.products;
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

    this.dataAccess.getProductCategories$.subscribe({
      next: (productCategories) => {
        this.productCategories = productCategories;
        this.filteredProductCategories = productCategories;
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

    this.dataAccess.getProductUnits$.subscribe({
      next: (productUnits) => {
        this.productUnits = productUnits;
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }

  public filterProductsAndCategories(selectedType: string[]): void {
    this.filterCategoriesByType(selectedType);
    this.filterProductsByType(selectedType);
  }

  public filterProductsByType(selectedType: string[]): void {
    this.filteredProducts = this.products.filter(product =>
      selectedType.includes(product.type)
    );
  }

  public filterCategoriesByType(selectedType: string[]): void {
    this.filteredProductCategories = this.productCategories.filter(category =>
      selectedType.includes(category.type)
    );
  }

  public filterByCategories(selectedCategory: string): ProductResponseData[] {
    return this.filteredProducts = this.products.filter(product => {
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
    this.filteredProducts = this.products.filter(category =>
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