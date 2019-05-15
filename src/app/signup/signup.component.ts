import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../router.animations';
import {SignupService} from "../service/signup/signup.service";
import {SignupForm} from "../domain/signupform";


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

  constructor(private _formBuilder: FormBuilder, private sigUpService: SignupService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
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

  onSignUp(): void {
    let signupform: SignupForm = new SignupForm();
    signupform.username = this.firstFormGroup.get('emailCtrl').value;
    signupform.password = this.firstFormGroup.get('passwordCtrl').value;
    signupform.firstname = this.firstFormGroup.get('firstNameCtrl').value;
    signupform.lastname = this.firstFormGroup.get('lastNameCtrl').value;
    signupform.phone = this.firstFormGroup.get('phoneCtrl').value;

    signupform.zipcode = this.secondFormGroup.get('zipCodeCtrl').value;
    signupform.state = this.secondFormGroup.get('stateCtrl').value;
    signupform.city = this.secondFormGroup.get('cityCtrl').value;
    signupform.street = this.secondFormGroup.get('streetCtrl').value;
    signupform.housenumber = this.secondFormGroup.get('houseNumberCtrl').value;
    signupform.floor = this.secondFormGroup.get('floorCtrl').value;
    signupform.door = this.secondFormGroup.get('doorCtrl').value;

    this.sigUpService.doSignUp(signupform);

  }
}


