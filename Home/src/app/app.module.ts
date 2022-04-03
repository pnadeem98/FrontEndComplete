import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomeModule/home/home.component';
import { LoginComponent } from './HomeModule/login/login.component';
import { RegisterComponent } from './HomeModule/register/register.component';
import { ForgetIdComponent } from './ForgetIDandPassModule/forget-id/forget-id.component';
import { ForgetPassComponent } from './ForgetIDandPassModule/forget-pass/forget-pass.component';
import { OpenAccountComponent } from './CreateModule/open-account/open-account.component';
import { DashboardComponent } from './DashboardModules/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundTransferComponent } from './FundTransferModule/fund-transfer/fund-transfer.component';
import { IMPSComponent } from './FundTransferModule/imps/imps.component';
import { AddPayeeComponent } from './FundTransferModule/add-payee/add-payee.component';
import { NeftComponent } from './FundTransferModule/neft/neft.component';
import { RtgsComponent } from './FundTransferModule/rtgs/rtgs.component';

import { MaterialModule } from './matrial-module';
import { TermsandcondComponent } from './HomeModule/termsandcond/termsandcond.component';
import { SuccessComponent } from './FundTransferModule/success/success.component';
import { AccountDetailsComponent } from './DashboardModules/account-details/account-details.component';


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
    TermsandcondComponent,
    SuccessComponent,
    AccountDetailsComponent,

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
