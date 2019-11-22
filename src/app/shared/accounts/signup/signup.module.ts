import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {SignupComponent} from './signup.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'',
        component:SignupComponent
      }
    ])
  ],
  declarations:[SignupComponent]
})
export class SignupModule { }
