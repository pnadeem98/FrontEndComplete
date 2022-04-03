import { Injectable } from '@angular/core';
import { Login } from '../ClassFiles/Login';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8787/Login/addLogin';  
  
  constructor(private http:HttpClient) { }  
  
  createLogin(l:Login) {  
    return this.http.post(this.baseUrl,l);  
  }  
  
}