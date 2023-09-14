import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, shareReplay, throwError } from 'rxjs';
import { OldNewPasswords, ProductTypes, ProductUnit, ReponseLoginData, SubscriptionBody, User } from '../../../shared/interfaces/interfaces';
import { ProductCategory } from '../../../shared/interfaces/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

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
  public getProducts$ = this.http.get<any[]>('https://api-eko-bazarek.azurewebsites.net/api/products')
    .pipe(
      map(product => product.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      // catchError()
    )


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {

  }

  public postSubscription(bodyReq: SubscriptionBody, httpOptions: { headers: HttpHeaders }) {
    return this.http.post<string>('https://api-eko-bazarek.azurewebsites.net/api/subscribe', bodyReq, httpOptions)
      .pipe(
        catchError(err => {
          this.openSnackBar("Nie udalo sie zasuksrybować")
          return throwError(() => err);
        }),
        shareReplay(1),
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

  public postProduct(form: FormData, httpOptions: { headers: HttpHeaders }) {
    return this.http.post<any>('https://api-eko-bazarek.azurewebsites.net/api/products', form, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err)
          return of(null)
        }),
        shareReplay(1),

        // catchError()
      )

  }// ANYYYYYYYYYYYYYYYYYYYYYY! tuprzerobie na sigleton

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'Zamknij', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'top',
    });
  }

  public putUser(reqBody: User, httpOptions: { headers: HttpHeaders }): Observable<ReponseLoginData> {

    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users'
    return this.http.post<ReponseLoginData>(url, reqBody, httpOptions)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError(err => {
          console.log(err);
          throw err;
        })
      );
  }
}

