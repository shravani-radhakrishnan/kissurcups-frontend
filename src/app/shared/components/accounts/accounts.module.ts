import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountsRoutingModule } from './accounts-routing.module';
import { IonicModule } from '@ionic/angular';
import { AccountsComponent } from './accounts.component';


@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
})
export class AccountsModule { }
