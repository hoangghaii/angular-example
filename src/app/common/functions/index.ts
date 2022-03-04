import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const forbiddenNameValidator = (names: string[] = []): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return names.includes(control.value)
      ? { forbiddenName: { value: control.value } }
      : null;
  };
};

export const comparePassword = (control: AbstractControl): ValidatorFn => {
  const value = control.value;
  return (): ValidationErrors | null => {
    return value.password === value.confirmPassword
      ? null
      : { passwordnotmatch: true };
  };
};
