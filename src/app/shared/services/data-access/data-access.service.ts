import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, shareReplay, tap } from 'rxjs';
import { ProductToSend, ProductTypes, ProductUnit, ReponseLoginData } from '../../interfaces/interfaces';
import { ProductCategory } from '../../interfaces/interfaces';
import { UserService } from '../user-service/user.service';


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

  public getProductUnits$ = this.http.get<ProductUnit[]>('https://api-eko-bazarek.azurewebsites.net/api/products/units')
    .pipe(
      shareReplay(1),
      // catchError()
    )



  // public postProduct$ = this.postProduct(form);

  // public postProduct$ = this.http.post<ProductToSend[]>('https://api-eko-bazarek.azurewebsites.net/api/products/', form, headers);


  // public token: any = this.user.getResponseData().subscribe({
  //   next: (user) => {
  //     user.token = this.token;
  //   },
  //   error: (err: Error) => console.error('Observer got an error: ' + err),
  // });
  




  constructor(private http: HttpClient) {

  }

  public postProduct(form: ProductToSend, httpOptions: {headers: HttpHeaders}) {
    return this.http.post<ProductToSend[]>('https://api-eko-bazarek.azurewebsites.net/api/products', form, httpOptions)
      .pipe(
        tap(x => console.log(x)),
        catchError(err => {
          console.log(err);
          return of(null)
        }),
        shareReplay(1),
        
        // catchError()
      )

  }




}
  
  // public postProduct(form: ProductToSend, headers: HttpHeaders) {
  //   let token: string;


  //   const headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/json')


  //   return this.http.post<ProductToSend[]>('https://api-eko-bazarek.azurewebsites.net/api/products/', form, headers)
  //     .pipe(
  //       shareReplay(1),
  //       // catchError()
  //     )

  // }