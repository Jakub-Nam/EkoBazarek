import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { upperCaseValidator, specialCharacterValidator } from '../validators/validators';
import { UserData } from '../shared/interfaces';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  public profileForm = this.fb.group({
    firstName: ['kuba', Validators.required],
    lastName: ['namysl', Validators.required],
    email: ['kubanam1995@gmail.com', [Validators.required]],
    phone: ['793742209', [Validators.required]],
    password: ['Namysl1234!',
      [
        Validators.required,
        Validators.minLength(8),
        upperCaseValidator(/[A-Z]/),
        specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
      ],
    ],
    repeatPassword: ['Namysl1234!', [Validators.required]],
    farmName: ['Farma12', [Validators.required]],
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

      console.log(this.profileForm.value)
      this.addUser(this.profileForm.value)
        .subscribe({
          next: (res) => {
            console.log(res)
          },
          error: (err: Error) => console.error('Observer got an error: ' + err),
        });
    }
  }

  addUser(userData: any): Observable<UserData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users'
    return this.http.post<UserData>(url, userData, httpOptions)
    // .pipe(
    //     catchError(this.handleError('addHero'))
    // );
  }
}
