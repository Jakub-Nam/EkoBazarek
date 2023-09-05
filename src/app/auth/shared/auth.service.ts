import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// import { User } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCred } from './userCred.interface';
import { ReponseLoginData } from 'src/app/shared/interfaces/interfaces';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({ providedIn: 'root' })

export class AuthService {

  emptyUser: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    farmName: '',
    farmDesc: '',
    street: '',
    streetNumber: '',
    flatNumber: '',
    city: '',
    postCode: '',
    country: '',
    voivodeship: '',
    county: '',
    district: '',
  


  };
  // get token() {
  //     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
  //         return null;
  //     }
  //     return this._token;
  // }
  //  _token: '',
  //  _tokenExpirationDate: Date | null,
  public user = new BehaviorSubject<User>(this.emptyUser);

  constructor(private http: HttpClient) { }

  login(form: UserCred): Observable<ReponseLoginData> {

    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users/login'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   
    return this.http.post<ReponseLoginData>(url, form, httpOptions)
  }



  // autoLogin() {
  //     const localStorageData = JSON.parse(localStorage.getItem('userData') || '{}');
  //     if (localStorageData) {
  //         const userData: {
  //             email: string;
  //             password: string;
  //             id: string;
  //             _token: string;
  //             _tokenExpirationDate: string;
  //         } = JSON.parse(localStorage.getItem('userData') || '{}');

  //         if (!userData) {
  //             return;
  //         }

  //         const loadedUser = new User(
  //             userData.email,
  //             userData.password,
  //             userData.id,
  //             userData._token,
  //             new Date(userData._tokenExpirationDate)
  //         );
  //         if (loadedUser.token) {
  //             this.user.next(loadedUser);
  //         }
  //         this.login(userData.email, userData.password);
  //     } else {
  //         return;
  //     }
  // }

  // logout() {
  //   this.user.next(this.emptyUser);
  //   // this.afAuth.signOut();
  //   localStorage.clear();
  // }
}
