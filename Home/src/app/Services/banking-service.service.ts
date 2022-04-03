import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingServiceService {

  constructor(
    private httpclient : HttpClient
  ) { }

  //set api url
  private SET_NEW_PASSWORD = "http://localhost:8081/api/resetpassword";

  //function to send password details to set new password
  setNewPassword(accountNumber: string,password: any,transPassword: any):Observable<any>{
    console.log("set new");
    
    const url = `${this.SET_NEW_PASSWORD}/${accountNumber}/${password}/${transPassword}`;
      return this.httpclient.put<any>(url,null);
  }
}