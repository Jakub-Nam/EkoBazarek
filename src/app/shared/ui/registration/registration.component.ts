import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  @Input() public profileForm: FormGroup = new FormGroup({});
  @Input() public isHeader: boolean = true;
  @Output() sendingProfileEvent: EventEmitter<void> = new EventEmitter();
  public password: FormControlName = this.profileForm.value.password;
  // public isHeader: boolean = true;

  public onSubmit(): void {
    this.sendingProfileEvent.emit();
  }
}