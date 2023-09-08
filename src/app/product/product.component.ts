import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductCategory, ProductTypes, ProductUnit, ProductResponseData } from '../shared/interfaces/interfaces';
import { shareReplay, tap } from 'rxjs';
import { DataAccessService } from '../shared/services/data-access/data-access.service';


@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public isProducts: boolean = true;
  public productTypes: ProductTypes[] = [];
  public productCategories: ProductCategory[] = [];
  public filteredProductCategories: ProductCategory[] = [];
  public filteredProducts: ProductResponseData[] = [];
  public productUnits: ProductUnit[] = [];
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

  constructor(public dataAccess: DataAccessService) { }

  ngOnInit() {
    this.filteredProducts = this.products
    this.dataAccess.getProductTypes$.subscribe({
      next: (productTypes) => {
        this.productTypes = productTypes
        this.filteredProducts = this.products;
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

    this.dataAccess.getProductCategories$.subscribe({
      next: (productCategories) => {
        this.productCategories = productCategories
        this.filteredProductCategories = this.productCategories
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

    this.dataAccess.getProductUnits$.subscribe({
      next: (productUnits) => {
        this.productUnits = productUnits
        console.log(this.productUnits)
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });



  }

  public filter(selectedType: string[]) {

    
      selectedType.forEach(type => {
        console.log(type);
        // Wykonaj operacje na wybranych typach
      });


   
      // Jeśli selectedType jest null, możesz obsłużyć ten przypadek lub zostawić go pusty
    
    // selectedType?.forEach(type => {
    //   console.log(type)
    //   // this.filterProductsByType(type)
    // })
    
    // console.log(selectedTypes)
    // this.filterCategoriesByType(selectedType);
  }

  public filterProductsByType(selectedType?: string): ProductResponseData[] {
    return this.filteredProducts = this.products.filter(product => {
      if (product.type !== selectedType) {
        return false;
      }
      return true;
    });
  }

  public filterCategoriesByType(selectedType: string): ProductCategory[] {
    return this.filteredProductCategories = this.productCategories.filter(category => {
      if (category.type !== selectedType) {
        return false;
      }

      return true;
    });
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

}





  // this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
    //   .subscribe({
    //     next: (productCategories) => {
    //       console.log(productCategories)
    //       this.productCategories = productCategories
    //     },
    //     error: (err: Error) => console.error('Observer got an error: ' + err),
    //   });
