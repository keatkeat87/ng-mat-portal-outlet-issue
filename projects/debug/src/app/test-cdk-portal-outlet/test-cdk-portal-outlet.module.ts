import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestCdkPortalOutletRoutingModule } from './test-cdk-portal-outlet-routing.module';
import { TestCdkPortalOutletComponent } from './test-cdk-portal-outlet.component';
import { PortalModule } from '@angular/cdk/portal';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [TestCdkPortalOutletComponent, DynamicComponent],
  imports: [
    CommonModule,
    TestCdkPortalOutletRoutingModule,
    PortalModule
  ]
})
export class TestCdkPortalOutletModule { }
