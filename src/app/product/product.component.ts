import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductCategory, ProductTypes, Product } from '../shared/interfaces/interfaces';
import { shareReplay, tap } from 'rxjs';
import { DataAccessService } from '../shared/services/data-access/data-access.service';


@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productTypes: ProductTypes[] = [];
  public productCategories: ProductCategory[] = [];
  public filteredProductCategories: ProductCategory[] = [];
  public filteredProducts: Product[] = [];
  public products: Product[] =
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
    // this.http.get<any>('https://api-eko-bazarek.azurewebsites.net/api/products')

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

   
  
  }

  public filter(selectedType: string){
    this.filterProducts(selectedType)
    this.filterCategories(selectedType);
  }

  public filterProducts(selectedType?: string): Product[] {
    return  this.filteredProducts = this.products.filter(product => {
      if (product.type !== selectedType) {
        return false;
      }
      return true;
    });
  }

  public filterCategories(selectedType: string): ProductCategory[]{
    return  this.filteredProductCategories = this.productCategories.filter(category => {
      if (category.type !== selectedType) {
        return false;
      }

      return true;
    });
  }
  
  public filterPerCategories(selectedCategory: string): Product[]{
    return  this.filteredProducts = this.products.filter(product => {
      if (product.category !== selectedCategory) {
        return false;
      }

      return true;
    });
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
