import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../Services/customer.service';
import { CustomerAccount } from './customer-account';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
custList:CustomerAccount[]=[];
  //name=new FormControl('');
 
  constructor(private custSer:CustomerService){}
customeracc:CustomerAccount=new CustomerAccount();
submitted=false;
ngOnInit()
{
  this.submitted=false;
}
accountsaveform=new FormGroup({  
  firstname:new FormControl('' , [Validators.required , Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$") ] ),
  lastname:new FormControl('' , [Validators.required , Validators.minLength(1),Validators.pattern("^[a-zA-Z]+$") ] ),   
  mobileno:new FormControl('' , [Validators.required , Validators.minLength(10),Validators.pattern("[6789][0-9]{9}") ] ),   
  emailid:new FormControl('',[Validators.required,Validators.email,Validators.pattern(".+@gmail\.com")]), 
  aadharno:new FormControl('',[Validators.required,Validators.pattern("\d{12}")]), 
  dob:new FormControl('',[Validators.required,Validators.pattern("dd/mm/yyyy")]), 
  address:new FormControl('',[Validators.required]),
   landmark:new FormControl('',[Validators.required]), 
  state:new FormControl('',[Validators.required]), 
  city:new FormControl('',[Validators.required]), 
  pincode:new FormControl('',[Validators.required,Validators.pattern("\d{6}")])

})  ;
get firstname() {
  return this.accountsaveform.get('firstname');
} 

get lastname() {
  return this.accountsaveform.get('lastname');
} 
get mobileno() {
  return this.accountsaveform.get('mobileno');
} 

get emailid() {
  return this.accountsaveform.get('emailid');
} 
get aadharno() {
  return this.accountsaveform.get('aadharno');
} 

get dob() {
  return this.accountsaveform.get('dob');
} 
get address() {
  return this.accountsaveform.get('address');
} 

get landmark() {
  return this.accountsaveform.get('landmark');
} 
get state() {
  return this.accountsaveform.get('state');
} 

get city() {
  return this.accountsaveform.get('city');
} 
get pincode() {
  return this.accountsaveform.get('pincode');
} 

saveAccount(saveAccount: any){  
  this.customeracc=new CustomerAccount(); 
  this.customeracc.firstname=saveAccount.firstname;  
  this.customeracc.lastname=saveAccount.lastname;  
  this.customeracc.mobileno=saveAccount.mobileno;  
  this.customeracc.emailid=saveAccount.emailid;  
  this.customeracc.aadharno=saveAccount.aadharno;  
  this.customeracc.dob=saveAccount.dob;  
  this.customeracc.address=saveAccount.address;  
  this.customeracc.landmark=saveAccount.landmark;  
  this.customeracc.state=saveAccount.state;  
  this.customeracc.city=saveAccount.city;  
  this.customeracc.pincode=saveAccount.pincode;  
  
  this.submitted = true;  
  this.save();  
}  

  

save() {  
  this.custSer.createCustomer(this.customeracc).subscribe(data => console.log(data), error => console.log(error));  
  this.customeracc = new CustomerAccount();  
}  

  
   getCustList()
  {
    this.custSer.getCustList().subscribe(
      data =>
      { 
        this.custList=data;
      return ("in open-account  " +this.custList)
    })
  }
  // myFunc(){
  //   console.log("Successfully Registered!!!");
  // }
}