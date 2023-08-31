import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../auth/shared/interfaces';
import { ReponseLoginData } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  private reponseLoginData: BehaviorSubject<ReponseLoginData> = new BehaviorSubject<ReponseLoginData>({
    token: '',
    user: {
      city: '',
      country: '',
      county: '',
      district: '',
      email: '',
      farmDesc: '',
      farmName: '',
      firstName: '',
      id: '',
      lastName: '',
      phone: '',
      postCode: '',
      street: '',
      streetNumber: '',
      voivodeship: '',
    }
  });

  getResponseData(): Observable<ReponseLoginData> {
    return this.reponseLoginData.asObservable();
  }

  updateResponseData(newData: ReponseLoginData) {
    this.reponseLoginData.next(newData);
  }

  consoleLog() {
    console.log(this.reponseLoginData)
  }

}
