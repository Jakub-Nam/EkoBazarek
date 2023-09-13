import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { upperCaseValidator, specialCharacterValidator } from '../auth/shared/validators/validators';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../core/services/user-service/user.service';
import { OldNewPasswords } from '../shared/interfaces/interfaces';
import { DataAccessService } from '../core/services/data-access/data-access.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private token: string = '';
  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        upperCaseValidator(/[A-Z]/),
        specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
      ],
    ],
    repeatPassword: ['', [Validators.required]],
    farmName: ['', [Validators.required]],
    farmDesc: ['', [Validators.required]],
    street: ['', [Validators.required]],
    streetNumber: ['', [Validators.required]],
    flatNumber: ['', [Validators.required]],
    city: ['', [Validators.required]],
    postCode: ['', [Validators.required]],
    voivodeship: ['', [Validators.required]],
    county: ['', [Validators.required]],
    district: ['', [Validators.required]],
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
    repNewPassword: ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder, private userService: UserService, private dataAccess: DataAccessService) {

  }

  public checkOldNewPass(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

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

      this.dataAccess.changePassword(requestBody, httpOptions).subscribe({
        next: (res) => {
          //console.log('udalo sie)
        },
        error: (err: Error) => console.error('Observer got an error: ' + err),
      });
    }
  }
}