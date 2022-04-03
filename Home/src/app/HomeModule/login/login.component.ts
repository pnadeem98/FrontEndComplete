import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/ClassFiles/Login';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addForm!:FormGroup;
  submitted:boolean=false;
    userid:String="";
    password:String="";
 l1:Login={userid:"",password:""}
  constructor(private formBuilder:FormBuilder,private router:Router,private loginservice:LoginService) { }  

  ngOnInit() {  
    this.addForm=this.formBuilder.group({
      userid: ['', Validators.required,Validators.email,Validators.pattern(".+@gmail\.com")],
     password:['',Validators.required,Validators.minLength(5),Validators.pattern("^[a-zA-Z]+$[6789][0-9]{9}")],
     
    })  
  }  
  
  onSubmit() {

    this.l1.userid = this.addForm.controls['userid'].value;
    this.l1.password = this.addForm.controls['password'].value;
    
   
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.loginservice.createLogin(this.l1)
      .subscribe(data => {
        console.log("login object added " + this.addForm.value);
        console.log("login object added " + this.l1);
      });
  }

  
}