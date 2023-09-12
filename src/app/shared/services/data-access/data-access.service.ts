import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, shareReplay, tap, throwError } from 'rxjs';
import { OldNewPasswords, ProductToSend, ProductTypes, ProductUnit, ReponseLoginData, SubscriptionBody } from '../../interfaces/interfaces';
import { ProductCategory } from '../../interfaces/interfaces';
import { UserService } from '../user-service/user.service';


@Injectable({
  providedIn: 'root'
})

export class DataAccessService {
  public getProductTypes$ = this.http.get<ProductTypes[]>('https://api-eko-bazarek.azurewebsites.net/api/products/types')
    .pipe(
      map(type => type.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      // catchError()
    )

  public getProductCategories$ = this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
    .pipe(
      map(categories => categories.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      // catchError()
    )

  public getProductUnits$ = this.http.get<ProductUnit[]>('https://api-eko-bazarek.azurewebsites.net/api/products/units')
    .pipe(
      map(categories => categories.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      // catchError()
    )


  constructor(private http: HttpClient) {

  }

  public postSubscription(bodyReq: SubscriptionBody, httpOptions: { headers: HttpHeaders }) {
    return this.http.post<string>('https://api-eko-bazarek.azurewebsites.net/api/subscribe', bodyReq, httpOptions)
      .pipe(
        catchError(err => {

          return throwError(() => err);
        }),
        shareReplay(1),

        // catchError()
      )

  }

  public changePassword(reqBody: OldNewPasswords, httpOptions: { headers: HttpHeaders }): Observable<void> {
    return this.http.post<void>('https://api-eko-bazarek.azurewebsites.net/api/users/change-password', reqBody, httpOptions)
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          throw err;
        })
      );
  }

  public postProduct(form: FormData,  httpOptions: { headers: HttpHeaders }) {
    return this.http.post<any>('https://api-eko-bazarek.azurewebsites.net/api/products', form, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err)
          return of(null)
        }),
        shareReplay(1),

        // catchError()
      )

  }// ANYYYYYYYYYYYYYYYYYYYYYY!
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