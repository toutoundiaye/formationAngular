import {AbstractControl, ValidatorFn} from "@angular/forms";

export class CustomValidators {

  public static validEmail(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (control.value != null && control.value !== '') {
        const regex = new RegExp('#[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$#');
        return !regex.test(control.value) ? {'validEmail':control.value} : null;
      }
    }
  }
}
