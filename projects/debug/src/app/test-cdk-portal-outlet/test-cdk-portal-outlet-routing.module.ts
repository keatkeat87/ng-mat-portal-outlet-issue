import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCdkPortalOutletComponent } from './test-cdk-portal-outlet.component';

const routes: Routes = [{ path: '', component: TestCdkPortalOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCdkPortalOutletRoutingModule { }
