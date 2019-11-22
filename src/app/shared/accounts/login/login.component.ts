import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TosterService } from '../../../core/services/toster.service';
import { PASSWORD, USERNAME } from '../../../core/constants/constant';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private toastService: TosterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
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
    if (this.loginForm.value['mobileNumber'] === USERNAME && this.loginForm.value['password'] === PASSWORD) {
      this.router.navigate(['/signup']);
    } else {
      this.toastService.presentToast('User account not found,Please Signup ', 2000);
    }
  }
}
