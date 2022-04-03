import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Benificiary } from '../FundTransferModule/add-payee/Benificiary';

@Injectable({
  providedIn: 'root'
})
export class BenificiaryService {

  private baseUrl:string="http://localhost:8787/Benificiary"

  constructor(private httpSer:HttpClient) { }

  public benList(){
    return this.httpSer.get<Benificiary[]>(this.baseUrl+"/allben");
  }
  
  createBenificairy(benificiary: object): Observable<object> {  
    return this.httpSer.post(`${this.baseUrl}`+"/addben", benificiary);  
  }  
}
