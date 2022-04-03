import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPayeeComponent } from './FundTransferModule/add-payee/add-payee.component';
import { DashboardComponent } from './DashboardModules/dashboard/dashboard.component';
import { ForgetIdComponent } from './ForgetIDandPassModule/forget-id/forget-id.component';
import { ForgetPassComponent } from './ForgetIDandPassModule/forget-pass/forget-pass.component';
import { FundTransferComponent } from './FundTransferModule/fund-transfer/fund-transfer.component';
import { HomeComponent } from './HomeModule/home/home.component';
import { IMPSComponent } from './FundTransferModule/imps/imps.component';
import {LoginComponent } from './HomeModule/login/login.component';
import { NeftComponent } from './FundTransferModule/neft/neft.component';
import { OpenAccountComponent } from './CreateModule/open-account/open-account.component';
import {RegisterComponent } from './HomeModule/register/register.component';
import { RtgsComponent } from './FundTransferModule/rtgs/rtgs.component';
import { SuccessComponent } from './FundTransferModule/success/success.component';
import { TermsandcondComponent } from './HomeModule/termsandcond/termsandcond.component';
import { AccountDetailsComponent } from './DashboardModules/account-details/account-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgetId",component:ForgetIdComponent},
  {path:"forgetpass",component:ForgetPassComponent},
  {path:"Apply",component:OpenAccountComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"fundtransfer",component:FundTransferComponent},
  {path:"IMPS",component:IMPSComponent},
  {path:"NEFT",component:NeftComponent},
  {path:"RTGS",component:RtgsComponent},
  {path:"Payee",component:AddPayeeComponent},
  {path:"termsandcond",component:TermsandcondComponent},
  {path:'success',component:SuccessComponent},
  {path:'accDetails',component:AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
