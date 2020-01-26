import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Routes, RouterModule } from '@angular/router';
import { QrscannerComponent } from './qrscanner.component';
import { IonicModule } from '@ionic/angular';
import { NgOtpInputModule } from  'ng-otp-input';

const routes: Routes = [
  {
    path: '',
    component: QrscannerComponent
  }
];

@NgModule({
  declarations: [QrscannerComponent],
  imports: [
    CommonModule,
    ZXingScannerModule,
    RouterModule.forChild(routes),
    IonicModule,
    NgOtpInputModule 
  ]
})
export class QrscannerModule { }
