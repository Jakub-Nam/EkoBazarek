import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReponseLoginData } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private emptyResponseData: ReponseLoginData = {
    token: '',
    user: {
      city: '',
      county: '',
      country: '',
      district: '',
      email: '',
      farmDesc: '',
      farmName: '',
      firstName: '',
      flatNumber: '',
      id: '',
      lastName: '',
      phone: '',
      postCode: '',
      street: '',
      streetNumber: '',
      voivodeship: '',
    }
  }
  constructor() { }

  private reponseLoginData: BehaviorSubject<ReponseLoginData> = new BehaviorSubject<ReponseLoginData>(this.emptyResponseData);

  public getResponseData(): Observable<ReponseLoginData> {
    return this.reponseLoginData.asObservable();
  }

  public updateResponseData(newData: ReponseLoginData): void {
    return this.reponseLoginData.next(newData);
  }
  
  public logout(): void {
    this.updateResponseData(this.emptyResponseData)
  }
}
