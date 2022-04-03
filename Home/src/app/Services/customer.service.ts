import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl="http://localhost:4040/cust";
    
  constructor(private httpSer:HttpClient) { }
  getCustList():Observable<any>
  {
   alert ("Account works")
   return this.httpSer.get(`${this.baseUrl}`+'/customers');
  }
   getCustById(id:number)
  {
    console.log(this.httpSer.get(`${this.baseUrl}`+'/customers/'+{id}));
    return this.httpSer.get(`${this.baseUrl}+/customers/+${id}`);
   }
  createCustomer(customer: any): Observable<object> {  
    return this.httpSer.post(`${this.baseUrl}`+'/addCustomer', customer);  
  }  
  // createCustomer(customer: CustomerAccount): Observable<any> { 
  //   console.log("inside createAccount");
 
  // this.customerid=localStorage.getItem('customerid'); 

  //   console.log("this.customerid" +this.customerid)

  //   this.c=Number("c"+this.customerid);
   
  //       return this.httpSer.post("http://localhost:4040/cust/addCustomer"+ '/' + this.customerid,customer); 
  //  }
}