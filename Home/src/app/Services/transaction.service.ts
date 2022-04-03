import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 
  private baseUrl:string="http://localhost:8787/Transaction"

  constructor(private httpSer:HttpClient) { }

  public addTrans(transaction:object):Observable<object> {
    alert("Method callled")
    return this.httpSer.post(`${this.baseUrl}`+"/addtrans", transition);  
  }  
  }
