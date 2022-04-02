import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Benificiary } from './add-payee/Benificiary';

@Injectable({
  providedIn: 'root'
})
export class BenificiaryService {

  private baseUrl:string="http://localhost:8787/Benificiary"

  constructor(private httpSer:HttpClient) { }

  public addBen(){
    return this.httpSer.get<Benificiary[]>(this.baseUrl+"/allcus");
  }
  
  createBenificairy(benificiary: object): Observable<object> {  
    alert("message called")
    return this.httpSer.post(`${this.baseUrl}`+"/addben", benificiary);  
  }  
}
