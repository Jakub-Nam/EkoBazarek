import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReponseLoginData } from '../../../shared/interfaces/interfaces';

@Injectable()
  // providedIn: 'root'
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

  public getResponseData$(): Observable<ReponseLoginData> {
    return this.reponseLoginData.asObservable();
  }

  public updateResponseData(data: ReponseLoginData): void {
    return this.reponseLoginData.next(data);
  }
  
  public logout(): void {
    this.updateResponseData(this.emptyResponseData)
  }
}
