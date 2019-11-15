import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './modules/shared/admin-layout/admin-layout.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SideNavComponent } from './modules/shared/side-nav/side-nav.component';
import { MaterialModule } from './modules/shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HTTP_INTERCEPTOR_PROVIDERS } from './modules/shared/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaterialTimepickerModule
  ],
  providers: [HTTP_INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
