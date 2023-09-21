import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function priceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const priceValue = control.value;

    if (priceValue <= 0) {
      return { priceInvalid: true, message: 'Cena musi być większa od zera' };
    }

    if (!/^\d+\.\d{2}$/.test(priceValue)) {
      return { priceInvalid: true, message: 'Cena musi mieć dokładnie dwa miejsca po przecinku' };
    }

    return null; 
  };
}