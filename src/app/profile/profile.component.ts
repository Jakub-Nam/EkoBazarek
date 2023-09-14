import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { upperCaseValidator, specialCharacterValidator } from '../auth/shared/validators/validators';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../core/services/user-service/user.service';
import { OldNewPasswords, ReponseLoginData, User } from '../shared/interfaces/interfaces';
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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dataAccess: DataAccessService,
  ) {
    this.userService.getResponseData().subscribe({
      next: (res: ReponseLoginData) => {

        if (res.user.farmName !== '') {
          this.profileForm.setValue({
            firstName: res.user.firstName as string,
            lastName: res.user.lastName as string,
            email: res.user.email as string,
            phone: res.user.phone as string,
            farmName: res.user.farmName as string,
            farmDesc: res.user.farmDesc as string,
            street: res.user.street as string,
            streetNumber: res.user.streetNumber as string,
            flatNumber: res.user.flatNumber as string,
            city: res.user.city as string,
            postCode: res.user.postCode as string,
            voivodeship: res.user.voivodeship as string,
            county: res.user.county as string,
            district: res.user.district as string,
          });
        }
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

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

  public updateUserData(): void {
    const newDataUser: User = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      phone: this.profileForm.value.phone,
      farmName: this.profileForm.value.farmName,
      farmDesc: this.profileForm.value.farmDesc,
      street: this.profileForm.value.street,
      streetNumber: this.profileForm.value.streetNumber,
      flatNumber: this.profileForm.value.flatNumber,
      city: this.profileForm.value.city,
      postCode: this.profileForm.value.postCode,
      voivodeship: this.profileForm.value.voivodeship,
      county: this.profileForm.value.county,
      district: this.profileForm.value.district,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    this.dataAccess.putUser(newDataUser, httpOptions).subscribe({
      next: (res) => {
  console.log('SUKCES')
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }
}