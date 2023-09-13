import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
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
