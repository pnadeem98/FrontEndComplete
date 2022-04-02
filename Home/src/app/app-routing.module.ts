import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetIdComponent } from './forget-id/forget-id.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { HomeComponent } from './home/home.component';
import { IMPSComponent } from './imps/imps.component';
import {LoginComponent } from './login/login.component';
import { NeftComponent } from './neft/neft.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import {RegisterComponent } from './register/register.component';
import { RtgsComponent } from './rtgs/rtgs.component';

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
  {path:"Payee",component:AddPayeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
