import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', loadChildren: () => import('./shared/components/accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'outlets', loadChildren: () => import('./shared/components/outlets/outlets.module').then(m => m.OutletsModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
