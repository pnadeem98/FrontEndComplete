import { Injectable } from '@angular/core';
import { Account } from '../ClassFiles/Account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl:String="http://localhost:8787/Account"

  constructor(private httpSer:HttpClient) { }
  
  public accList(){

    return this.httpSer.get<Account[]>(this.baseUrl+'/accList')
  }

}
