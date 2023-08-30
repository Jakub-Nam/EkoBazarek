// import { AlertComponent } from '../shared/alert/alert.component';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { specialCharacterValidator, upperCaseValidator } from './validators/validators';
// import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
// import { Subscription } from 'rxjs';
// import { User } from './user.model';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
    public registrationView: boolean = true;
    public profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        eMail: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
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
        farmDescritpion: ['', [Validators.required]],
        street: ['', [Validators.required]],
        houseNumber: ['', [Validators.required]],
        apartmentNumber: ['', [Validators.required]],
        cityVillage: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        voivodeship: ['', [Validators.required]],
        poviat: ['', [Validators.required]],
        commune: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder) { }

    get firstName() { return this.profileForm.get('firstName'); }
    get lastName() { return this.profileForm.get('lastName'); }
    get email() { return this.profileForm.get('email'); }
    get phoneNumber() { return this.profileForm.get('phoneNumber'); }
    get password() { return this.profileForm.get('password'); }
    get repeatPassword() { return this.profileForm.get('repeatPassword'); }

    onSubmit() {
        if (this.profileForm.value.password === this.profileForm.value.repeatPassword) {

            console.log(this.profileForm.value)
        }
    }
    //   @ViewChild(PlaceholderDirective, { static: false }) alertHost!: PlaceholderDirective;

    //   adminInterface = false;
    //   error = '';
    //   faEnvelope = faEnvelope;
    //   faEye = faEye;
    //   faEyeSlash = faEyeSlash;
    //   hidePassword = true;
    //   hideSpinner = true;
    //   message = '';
    //   passwordStrengthmeter: any;
    //   registrationView = false;

    //   private closeSub!: Subscription;


    //   constructor(
    //     private authService: AuthService,
    //     private router: Router
    //   ) { }


    //   public togglePassword() {
    //     this.hidePassword = !this.hidePassword;
    //   }

    //   public onSubmit(form: NgForm) {
    //     if (!form.valid) {
    //       return;
    //     }
    //     const email = form.value.email;
    //     const password = form.value.password;

    //     this.authService.login(email, password)
    //       .then(async userCredential => {
    //         let token = '';
    //         let date: Date =
    //           await userCredential.user.getIdTokenResult().then(
    //             (response: { token: string; }) => token = response.token
    //           );

    //         await userCredential.user.getIdTokenResult().then(
    //           (response: { expirationTime: Date; }) => date = response.expirationTime
    //         );

    //         const user = new User(
    //           userCredential.user.email,
    //           password,
    //           userCredential.user.uid,
    //           token,
    //           date
    //         );

    //         this.authService.user.next(user);
    //         localStorage.setItem('userData', JSON.stringify(user));
    //         this.router.navigate(['/']);
    //       })


    //       .catch(error => {
    //         this.message = 'Niepoprawne dane';
    //         this.showErrorAlert(this.message);
    //       });

    //     form.reset();
    //   }
    //   public onSwitchMode(form: NgForm) {
    //     this.registrationView = true;
    //   }
    //   public showRegistrationView() {
    //     this.registrationView = true;
    //   }
    //   public onHandleError() {
    //     this.message = '';
    //   }

    //   ngOnDestroy() {
    //     if (this.closeSub) {
    //       this.closeSub.unsubscribe();
    //     }
    //   }

    //   private showErrorAlert(message: string) {
    //     const alertCmpFactory = this.alertHost.viewContainerRef.createComponent(AlertComponent);
    //     const hostViewContainerRef = this.alertHost.viewContainerRef;
    //     alertCmpFactory.instance.message = message;

    //     this.closeSub = alertCmpFactory.instance.closeMessage.subscribe(() => {
    //       this.closeSub.unsubscribe();
    //       hostViewContainerRef.clear();
    //     });
    //   }
}
