import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OutletComponent } from './outlet.component';

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
    RouterModule.forChild(routes)
  ]
})
export class OutletModule { }
