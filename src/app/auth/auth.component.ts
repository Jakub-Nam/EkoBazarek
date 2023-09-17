import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { specialCharacterValidator, upperCaseValidator } from './shared/validators/validators';
import { UserCred } from './shared/userCred.interface';
import { UserService } from '../core/services/user-service/user.service';
import { User } from '../shared/interfaces/interfaces';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../core/services/snack-bar/snack-bar';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    public registrationView: boolean = true;
    public loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [
            Validators.required,
            Validators.minLength(8),
            upperCaseValidator(/[A-Z]/),
            specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
        ]]
    })

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

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private route: Router,
        private snackBarService: SnackBarService
    ) { }

    ngOnInit(): void {
        this.registrationView = false;
    }

    public viewToggler(): void {
        this.registrationView = !this.registrationView
    }

    public login(): void {
        let formValues: UserCred = this.loginForm.value
        this.authService.login(formValues).subscribe({
            next: (res) => {
                this.userService.updateResponseData(res);
                this.route.navigateByUrl('/home');
                this.snackBarService.openSnackBar('Pomyślnie zalogowano.');
            },
        });
    }

    public createAccount(): void {
        if (this.profileForm.value.password === this.profileForm.value.repeatPassword) {
            const requestBody: User = {
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
                password: this.profileForm.value.password,
            }

            this.authService.postUser(requestBody)
                .subscribe({
                    next: () => {
                        this.viewToggler()
                        this.snackBarService.openSnackBar('Pomyślnie utworzono uzytkownika.');
                    }
                });
        }
    }
}