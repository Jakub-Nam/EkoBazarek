import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, shareReplay } from 'rxjs';
import { ProductTypes } from '../../interfaces/interfaces';
import { ProductCategory } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  public getProductTypes$ = this.http.get<ProductTypes[]>('https://api-eko-bazarek.azurewebsites.net/api/products/types')
    .pipe(
      shareReplay(1),
      // catchError()
    )

  public getProductCategories$ = this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
    .pipe(
      shareReplay(1),
      // catchError()
    )

  constructor(private http: HttpClient) { }

}
