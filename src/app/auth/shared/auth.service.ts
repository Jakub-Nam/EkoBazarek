import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCred } from './userCred.interface';
import { ReponseLoginData } from 'src/app/shared/interfaces/interfaces';
import { User } from 'src/app/shared/interfaces/interfaces';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient, private snackBarService: SnackBarService) { }

  login(form: UserCred): Observable<ReponseLoginData> {

    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users/login'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ReponseLoginData>(url, form, httpOptions)
      .pipe(
        catchError(err => {
          console.error(err);
          this.snackBarService.openSnackBar("Nieprawidlowy login lub hasło użytkownika.");
          return EMPTY;
        })
      )
  }

  public postUser(reqBody: User): Observable<ReponseLoginData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users'
    return this.http.post<ReponseLoginData>(url, reqBody, httpOptions)
      .pipe(
        catchError(err => {
          console.error(err);
          this.snackBarService.openSnackBar("Nie udało się utworzyć użytkownika.");
          return EMPTY;
        })
      );
  }
}
