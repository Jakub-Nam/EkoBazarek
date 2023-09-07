import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCred } from './userCred.interface';
import { ReponseLoginData } from 'src/app/shared/interfaces/interfaces';
import { User } from 'src/app/shared/interfaces/interfaces';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient) { }

  login(form: UserCred): Observable<ReponseLoginData> {

    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users/login'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ReponseLoginData>(url, form, httpOptions)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError(err => {
          console.log(err);
          throw err;
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
        map((data) => {
          return data;
        }),
        catchError(err => {
          console.log(err);
          throw err;
        })
      );
  }

  
  // logout() {
  //   this.user.next(this.emptyUser);
  //   // this.afAuth.signOut();
  //   localStorage.clear();
  // }
}
