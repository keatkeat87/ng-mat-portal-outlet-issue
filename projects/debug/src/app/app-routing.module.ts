import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo: 'test-cdk-portal-outlet', pathMatch: 'full' },
  { path: 'test-cdk-portal-outlet', loadChildren: () => import('./test-cdk-portal-outlet/test-cdk-portal-outlet.module').then(m => m.TestCdkPortalOutletModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
