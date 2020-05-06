import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TosterService } from 'src/app/core/services/toster.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup
  submit = false;
  passwordMatch;
  constructor(private fb: FormBuilder, private tosterService: TosterService,
    private storageService: StorageService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.forgotPasswordForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(6)]]
    })

    this.forgotPasswordForm.valueChanges.subscribe(ele => {
      this.passwordMatch = this.forgotPasswordForm.get('password').value === this.forgotPasswordForm.get('confirmPassword').value ? true : false;
    })
  }

  submitPassword() {
    this.submit = true;
    console.log(this.forgotPasswordForm)
    if (this.forgotPasswordForm.status === 'INVALID' && this.passwordMatch) {
      this.tosterService.presentToast('Please enter valid username and password', 2000);
    } else {
      this.onSubmitForm();
    }
  }

  onSubmitForm() {
    let obj = {
      username: this.forgotPasswordForm.get('password').value,
      password: this.forgotPasswordForm.get('username').value,
      userType: this.storageService.getItem('userType')
    }
    console.log(obj)
  }

}
