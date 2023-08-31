import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { UserCred } from '../shared/interfaces';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
    // email: ['kubanam1995@gmail.com', [Validators.required]],
    // password: ['Namysl1234!', [Validators.required]]
  })


  constructor(private fb: FormBuilder, private userService: UserService ,private authService: AuthService) { }

  onSubmit(){
    let formValues: UserCred = this.loginForm.value;
    this.login(formValues);
  }

  login(formValues: UserCred) {
   this.authService.login(formValues).subscribe({
    next: (res) => {
      console.log(res)
      this.userService.updateResponseData(res);
    },
    error: (err: Error) => console.error('Observer got an error: ' + err),
  });
  }

  test(){
    this.userService.consoleLog();
  }
 
  
}
