import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, catchError, map } from 'rxjs';
import { upperCaseValidator, specialCharacterValidator } from '../validators/validators';
import { UserData } from '../shared/interfaces';
import { ReponseLoginData } from 'src/app/shared/interfaces';
import { User } from './../../shared/interfaces';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  public profileForm = this.fb.group({
    firstName: ['Jakub', Validators.required],
    lastName: ['Namysl', Validators.required],
    email: ['kubanam1995@gmail.com', [Validators.required]],
    phone: ['793793793', [Validators.required]],
    password: ['Namysl1234!',
      [
        Validators.required,
        Validators.minLength(8),
        upperCaseValidator(/[A-Z]/),
        specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
      ],
    ],
    repeatPassword: ['Namysl1234!', [Validators.required]],
    farmName: ['FarmaZycia', [Validators.required]],
    farmDesc: ['lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', [Validators.required]],
    street: ['Farmerska', [Validators.required]],
    streetNumber: ['12', [Validators.required]],
    flatNumber: ['13', [Validators.required]],
    city: ['Glisnica', [Validators.required]],
    postCode: ['63-430', [Validators.required]],
    voivodeship: ['wielkopolskie', [Validators.required]],
    county: ['Ostrów Wielkopolski', [Validators.required]],
    district: ['Odolanów', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get phoneNumber() { return this.profileForm.get('phoneNumber'); }
  get password() { return this.profileForm.get('password'); }
  get repeatPassword() { return this.profileForm.get('repeatPassword'); }



  createAccount() {
    if (this.profileForm.value.password === this.profileForm.value.repeatPassword) {

      const requestBody: User = {
        user: {
          city: this.profileForm.value.city,
          country: "Polska",
          county: this.profileForm.value.county,
          district: this.profileForm.value.district,
          email: this.profileForm.value.email,
          farmDesc: this.profileForm.value.farmDesc,
          farmName: this.profileForm.value.farmName,
          firstName: this.profileForm.value.firstName,
          flatNumber: this.profileForm.value.flatNumber,
          id: '',
          lastName: this.profileForm.value.lastName,
          phone: this.profileForm.value.phone,
          postCode: this.profileForm.value.postCode,
          street: this.profileForm.value.street,
          streetNumber: this.profileForm.value.streetNumber,
          voivodeship: this.profileForm.value.voivodeship,
          password:this.profileForm.value.password,
        }

      }

      this.addUser(requestBody)
        .subscribe({
          next: (res) => {
            console.log(res)
          },
          error: (err: Error) => console.error('Observer got an error: ' + err),
        });
    }
  }

  addUser(reqBody: User): Observable<ReponseLoginData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users'
    return this.http.post<ReponseLoginData>(url, reqBody.user, httpOptions)
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        }),
        catchError(err => {
          console.log(err);
          throw err; // Lub obsłuż błąd, zwróć coś innego lub rzuc błąd dalej
        })
      );
  }
}
// catchError(this.handleError('addHero'))