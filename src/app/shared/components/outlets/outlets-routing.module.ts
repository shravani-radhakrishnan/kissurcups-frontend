import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletsComponent } from './outlets.component';


const routes: Routes = [
  {
    path: '',
    component: OutletsComponent,
    children: [
      {
        path: '',
        redirectTo: 'outlet',
        pathMatch: 'full',
      },
      {
        path: 'outlet',
        loadChildren: () => import('./outlet/outlet.module').then(m => m.OutletModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutletsRoutingModule { }
