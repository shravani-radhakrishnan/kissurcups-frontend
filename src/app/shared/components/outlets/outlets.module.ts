import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OutletsRoutingModule } from './outlets-routing.module';
import { OutletsComponent } from './outlets.component';
// import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    OutletsRoutingModule,
    IonicModule,
    // NgOtpInputModule
  ]
})
export class OutletsModule { }
