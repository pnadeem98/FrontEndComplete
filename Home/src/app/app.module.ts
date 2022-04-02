import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetIdComponent } from './forget-id/forget-id.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { IMPSComponent } from './imps/imps.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { NeftComponent } from './neft/neft.component';
import { RtgsComponent } from './rtgs/rtgs.component';

import { MaterialModule } from './matrial-module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetIdComponent,
    ForgetPassComponent,
    OpenAccountComponent,
    DashboardComponent,
    FundTransferComponent,
    IMPSComponent,
    AddPayeeComponent,
    NeftComponent,
    RtgsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
