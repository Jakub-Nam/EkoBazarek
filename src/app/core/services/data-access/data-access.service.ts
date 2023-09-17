import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, shareReplay, throwError } from 'rxjs';
import { OldNewPasswords, ProductTypes, ProductUnit, ReponseLoginData, SubscriptionBody, User } from '../../../shared/interfaces/interfaces';
import { ProductCategory } from '../../../shared/interfaces/interfaces';
import { SnackBarService } from '../snack-bar/snack-bar';


@Injectable()

export class DataAccessService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });



  public getProductTypes = this.http.get<ProductTypes[]>('https://api-eko-bazarek.azurewebsites.net/api/products/types')
    .pipe(
      map(type => type.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      catchError(err => {
        this.handleError(err);
        return EMPTY
      })
    )

  public getProductCategories = this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
    .pipe(
      map(categories => categories.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      catchError(err => {
        this.handleError(err);
        return EMPTY
      })
    )
  public getProductCategoriesTop = this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories/top')
    .pipe(
      map(categories => categories.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      catchError(err => {
        this.handleError(err);
        return EMPTY
      })
    )

  public getProductUnits = this.http.get<ProductUnit[]>('https://api-eko-bazarek.azurewebsites.net/api/products/units')
    .pipe(
      map(categories => categories.sort((a, b) => a.name.localeCompare(b.name))),
      shareReplay(1),
      catchError(err => {
        this.handleError(err);
        return EMPTY
      })
    )

  public getProducts = this.http.get<any[]>('https://api-eko-bazarek.azurewebsites.net/api/products')
    .pipe(
      map(product => product.sort((a, b) => a.name.localeCompare(b.name))),
      catchError(err => {
        this.handleError(err);
        return EMPTY
      }),
      shareReplay(1),
    )
  // nie zgadza sie typ produktu ze swaggera, z typem ktory otrzymuje

  constructor(private http: HttpClient, private snackBarService: SnackBarService) { }

  public postSubscription(bodyReq: SubscriptionBody) {
    return this.http.post<string>('https://api-eko-bazarek.azurewebsites.net/api/subscribe', bodyReq, { headers: this.headers })
      .pipe(
        catchError(err => {
          this.handleError(err);
          return EMPTY
        }),
        shareReplay(1),
      )
  }

  public changePassword(reqBody: OldNewPasswords, httpOptions: { headers: HttpHeaders }): Observable<void> {
    return this.http.post<void>('https://api-eko-bazarek.azurewebsites.net/api/users/change-password', reqBody, httpOptions)
      .pipe(
        catchError(err => {
          this.handleError(err);
          return EMPTY;
        })
      );
  }

  public putUser(reqBody: User, httpOptions: { headers: HttpHeaders }): Observable<ReponseLoginData> {

    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users'
    return this.http.post<ReponseLoginData>(url, reqBody, httpOptions)
      .pipe(
        catchError(err => {
          this.handleError(err);
          return EMPTY
        })
      );
  }

  public handleError(err: HttpErrorResponse): Observable<void> {
    let errorMessage: string = err.error.errors;
    this.snackBarService.openSnackBar(errorMessage)
    return throwError(() => errorMessage)
  }
}
