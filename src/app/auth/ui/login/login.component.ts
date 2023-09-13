import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() activateViewTogglerEvent: EventEmitter<void> = new EventEmitter();
  @Output() activateLoginEvent: EventEmitter<void> = new EventEmitter();
  @Input() loginForm: FormGroup = new FormGroup({})

  get password() { return this.loginForm.get('password'); }

  public activateViewToggler(): void {
    this.activateViewTogglerEvent.emit();
  }

  public onSubmit(): void {
    this.activateLoginEvent.emit();
  }

}
