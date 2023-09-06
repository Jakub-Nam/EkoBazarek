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

  // get firstName() { return this.profileForm.get('firstName'); }
  // get lastName() { return this.profileForm.get('lastName'); }
  // get email() { return this.profileForm.get('email'); }
  // get phoneNumber() { return this.profileForm.get('phoneNumber'); }
  get password() { return this.profileForm.get('password'); }
  // get repeatPassword() { return this.profileForm.get('repeatPassword'); }

  public onSubmit(): void {
    this.sendingProfileEvent.emit();
  }
  public resetForm():void {
    this.profileForm.reset();
  }
}