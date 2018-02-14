import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../classe/custom-validators";
import {CustomPasswordValidators} from "../classe/custom-password-validators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirm: FormControl;
  gender: FormControl;
  term: FormControl;

  form: FormGroup;

  genderList: string[] = ['Homme', 'Femme', 'Autre'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //FormControl (default value, [validators], [asynchronous values])
    this.email = new FormControl('', [Validators.required, CustomValidators.validEmail()]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.confirm = new FormControl('', [Validators.required, CustomPasswordValidators.samePassword(this.password)]);
    this.gender = new FormControl('', []);
    this.term =  new FormControl('', []);

    this.form = this.fb.group({
      'email': this.email,
      'password': this.password,
      'confirm': this.confirm,
      'gender': this.gender,
      'term': this.term
    });

  }

}
