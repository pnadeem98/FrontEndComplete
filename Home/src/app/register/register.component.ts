import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Register } from './Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acc_no: any;
  confirmlogin_psw: any;
  login_psw: any;
  trans_pw: any;
  confirmtrans_psw: any;
  otp: any;
  studentservice: any;

    
  constructor(private registerservice:RegisterService) { }  
  
  register : Register=new Register();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  registerform=new FormGroup({  
    acc_no:new FormControl('' , [Validators.required ] ),
    login_psw:new FormControl('' , [Validators.required ] ),
    confirmlogin_psw:new FormControl('' , [Validators.required ] ),
    trans_psw:new FormControl('' , [Validators.required ] ),
    confirmtrans_psw:new FormControl('' , [Validators.required ] ),
    otp:new FormControl('' , [Validators.required ] ),  
    });  
  
  saveRegister(saveRegister:any){  
    this.register=new Register();     
    this.register.acc_no=this.acc_no.value;  
    this.register.login_psw=this.login_psw.value;   
    this.register.confirmlogin_psw=this.confirmlogin_psw.value; 
    this.register.trans_psw=this.trans_pw.value; 
    this.register.confirmtrans_psw=this.confirmtrans_psw.value; 
    this.register.otp=this.otp.value; 
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.registerservice.createRegister(this.register)  
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
    this.register = new Register();  
  }  
}
