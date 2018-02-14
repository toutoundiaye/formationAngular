import {AbstractControl, ValidatorFn} from "@angular/forms";

export class CustomPasswordValidators {

  public static samePassword(password: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (control.value != null && control.value !== '') {

        return control.value !== password.value ? {'samePassword':control.value} : null;
      }
    }
  }
}
