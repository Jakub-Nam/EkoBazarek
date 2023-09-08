import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { upperCaseValidator, specialCharacterValidator } from '../auth/shared/validators/validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/shared/auth.service';
import { UserService } from '../shared/services/user-service/user.service';
import { Observable, catchError, map } from 'rxjs';

interface OldNewPasswords {
  oldPassword: string | null | undefined,
  newPassword: string | null | undefined
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private token: string = '';
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


  public changePassForm = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['',
      [
        Validators.required,
        Validators.minLength(8),
        upperCaseValidator(/[A-Z]/),
        specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
      ],
    ],
    repNewPassword: ['Namysl1234!5', [Validators.required]],

  });

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private userService: UserService) {

  }

  public checkOldNewPass(): void {
    if (this.changePassForm.value.newPassword === this.changePassForm.value.repNewPassword) {
      let requestBody: OldNewPasswords =
      {
        "oldPassword": this.changePassForm.value.oldPassword,
        "newPassword": this.changePassForm.value.newPassword
      }

      this.userService.getResponseData().subscribe({
        next: (res) => {
          this.token = res.token
        },
        error: (err: Error) => console.error('Observer got an error: ' + err),
      });

      this.changePassword(requestBody)
        .subscribe();
    }

  }


  changePassword(reqBody: OldNewPasswords): Observable<void> {
    const url = 'https://api-eko-bazarek.azurewebsites.net/api/users/change-password'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    
    return this.http.post<void>(url, reqBody, httpOptions)
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

  //t odo serwisu!!! ^
}