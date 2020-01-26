import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TosterService } from '../../../../core/services/toster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { StorageService } from 'src/app/core/services/storage.service';
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
    private loginService: LoginService,
    private storageService: StorageService
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
    let userType = this.storageService.getItem('userType');
    if (userType != null) {
      loginObj.userType = userType;
    }

    this.loginService.login(loginObj)
      .then((data) => {
        console.log(data);
        if (data['body']['type'] === 'success') {
          this.restaurantInfo = data['body']['data'];
          this.storageService.setItem('mobile',data['body']['data']['mobile'])
          if (userType === 'appUser') {
            this.router.navigate(['outlets/qrscanner']);
          }
          if (userType === 'admin') {
            this.router.navigate(['outlets/outlet']);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
