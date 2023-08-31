// import { AlertComponent } from '../shared/alert/alert.component';
import { AuthService } from './shared/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { specialCharacterValidator, upperCaseValidator } from './validators/validators';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
// import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
// import { Subscription } from 'rxjs';
// import { User } from './user.model'


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
    public registrationView: boolean = false;
    

    constructor(private fb: FormBuilder, private http: HttpClient) { }


    viewToggler(){
        this.registrationView = !this.registrationView
    }

   

    // this.http.get<any>('https://api-eko-bazarek.azurewebsites.net/api/users')




    // service
    // getConfig() {
    //     // now returns an Observable of Config
    //     return this.http.get<Config>(this.configUrl);
    //   }
    //compt 
    // config: Config | undefined;
    // showConfig() {
    //     this.configService.getConfig()
    //       // clone the data object, using its known Config shape
    //       .subscribe((data: Config) => this.config = { ...data });
    //   }



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
