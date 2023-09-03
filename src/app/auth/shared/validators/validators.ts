import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function upperCaseValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const upperCase = nameRe.test(control.value);
      return !upperCase ? {upperCase: {value: control.value}} : null;
    };
  }

export function specialCharacterValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const specialCharacter = nameRe.test(control.value);
      return !specialCharacter ? {specialCharacter: {value: control.value}} : null;
    };
  }