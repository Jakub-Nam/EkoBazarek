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
  @Input() public isProfile: boolean = false;
  @Output() sendingProfileEvent: EventEmitter<void> = new EventEmitter();

  get password() { return this.profileForm.get('password'); }

  public onSubmit(): void {
    this.sendingProfileEvent.emit();
  }
  public resetForm():void {
    this.profileForm.reset();
  }
}