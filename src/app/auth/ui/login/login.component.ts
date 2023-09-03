import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() activateParentButtonEvent: EventEmitter<void> = new EventEmitter();
  @Output() activateLoginEvent: EventEmitter<void> = new EventEmitter();
  @Input() loginForm: FormGroup = new FormGroup({})
  
  public activateParentButton(): void {
    this.activateParentButtonEvent.emit();
  }
  public onSubmit(): void {
    this.activateLoginEvent.emit();
  }
  
}
