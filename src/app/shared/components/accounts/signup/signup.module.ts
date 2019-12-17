import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SignupComponent} from './signup.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations:[SignupComponent]
})
export class SignupModule { }
