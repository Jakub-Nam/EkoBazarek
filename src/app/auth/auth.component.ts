import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { specialCharacterValidator, upperCaseValidator } from './shared/validators/validators';
import { UserCred } from './shared/userCred.interface';
import { UserService } from '../shared/services/user-service/user.service';
import { User } from '../shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    public registrationView: boolean = false;
    public loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
    })

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

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService,
        private route: Router
    ) { }

    ngOnInit() {
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
                // pomyslnie zalogowano toast
            },
            error: (err: Error) => console.error('Observer got an error: ' + err),
        });
    }

    get firstName() { return this.profileForm.get('firstName'); }
    get lastName() { return this.profileForm.get('lastName'); }
    get email() { return this.profileForm.get('email'); }
    get phoneNumber() { return this.profileForm.get('phoneNumber'); }
    get password() { return this.profileForm.get('password'); }
    get repeatPassword() { return this.profileForm.get('repeatPassword'); }

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

            this.authService.addUser(requestBody)
                .subscribe({
                    next: (res) => {
                        console.log(res)
                        this.viewToggler()
                    },
                    error: (err: Error) => console.error('Observer got an error: ' + err),
                });
        }
    }
}