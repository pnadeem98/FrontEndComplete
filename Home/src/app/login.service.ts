import { Injectable } from '@angular/core';
import { Login } from './login/Login';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8282/Login/addLogin';  
  
  constructor(private http:HttpClient) { }  
  
  createLogin(login: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'addLogin',Login);  
  }  
  
}
