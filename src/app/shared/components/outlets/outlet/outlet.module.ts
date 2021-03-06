import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OutletComponent } from './outlet.component';
import { IonicModule } from '@ionic/angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent
  }
];

@NgModule({
  declarations: [OutletComponent],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class OutletModule { }
