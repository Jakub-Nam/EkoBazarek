import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/shared/auth.service';
import { upperCaseValidator, specialCharacterValidator } from 'src/app/auth/shared/validators/validators';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent {
  @Input() public changePassForm: FormGroup = new FormGroup({});
  @Output() public activateChangePassEvent: EventEmitter<void> = new EventEmitter();

  public password: FormControlName = this.changePassForm.value.newPass;

  onSubmit(){
    this.activateChangePassEvent.emit();
  }
}
