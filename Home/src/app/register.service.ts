import { Injectable } from '@angular/core';
import { Register } from './register/Register';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8282/Register/addRegister';  
  createRegister: any;
  
  constructor(private http:HttpClient) { }  
  
  createStudent(student: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'addRegister',Register);  
  }  
  
}

