import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../router.animations';


/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
      password2Ctrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      cityCtrl: ['', Validators.required],
      stateCtrl: ['', Validators.required],
      zipCodeCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required],
      houseNumberCtrl: ['', Validators.required],
      floorCtrl: [''],
      doorCtrl: ['']
    });

  }
  signup(): void {
  }
}


