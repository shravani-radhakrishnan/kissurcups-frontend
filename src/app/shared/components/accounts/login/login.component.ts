import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TosterService } from '../../../../core/services/toster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  restaurantInfo;
  constructor(
    private fb: FormBuilder,
    private toastService: TosterService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })

  }

  submitLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.status === 'INVALID') {
      this.toastService.presentToast('Please enter all required fields', 2000);
    } else {
      this.onSubmitLoginForm();
    }
  }

  onSubmitLoginForm() {
    let loginObj = this.loginForm.value;
    loginObj.userType = 'admin';
    this.loginService.login(loginObj)
    .then((data)=>{
      console.log(data);
      if(data['body']['type'] === 'success'){
        this.restaurantInfo = data['body']['data'];
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
