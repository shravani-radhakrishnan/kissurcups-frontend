import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletsRoutingModule } from './outlets-routing.module';
import { OutletsComponent } from './outlets.component';


@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    OutletsRoutingModule
  ]
})
export class OutletsModule { }
