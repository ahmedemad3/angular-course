import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
/**
 *
 *
 * @export
 * @class PhoneNumberValidator
 * @implements {Validator}
 */
@Directive({
  selector: '[phoneNumberValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneNumberValidator,
    multi: true
  }]
})


export class PhoneNumberValidator implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let pattern = /[1-9]{1}[0-9]{9}/;
    // console.log("Value : " + control.value)
    if (control.value && control.value.length != 10 && !control.value.match(pattern)) {
      return { 'phoneNumberInvalid': true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}
