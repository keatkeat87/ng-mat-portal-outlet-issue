import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { APIServerConfig, IdentityConfig, ALL_ENTITIES, API_SERVER_CONFIG, IDENTITY_CONFIG, RouteReuseStrategy, SRouteReuseStrategy } from 'projects/stooges/src/public-api';
// import { environment } from '../environments/environment';
// import * as AllEntities from 'projects/project-shared/src/lib/web-api/entity/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HammerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

