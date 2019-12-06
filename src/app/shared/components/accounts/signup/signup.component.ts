import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../../../../core/constants/constant';
import { TosterService } from 'src/app/core/services/toster.service';
import { SignupService } from './service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private toastService: TosterService,
    private signupService:SignupService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]

    })
  }

  submitSignup() {
    this.submitted = true;
    if (this.signupForm.status === 'INVALID') {
      this.toastService.presentToast('Please enter all required fields', 2000);
    } else {
      this.onSubmitSignupForm();
    }

  }

  onSubmitSignupForm() {
    let signupObj = {
      "mobile":this.signupForm.value.mobile ,
      "userName": this.signupForm.value.userName,
      "email":  this.signupForm.value.email,
      "deviceId": "kissurcups",
      "app": "kissurcups",
      "appVersion": "0.0.1",
      "gcmId": "",
      "gcmToken": ""
    }
    console.log(signupObj);
    this.signupService.signup(signupObj)
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{

    })
  }

}
