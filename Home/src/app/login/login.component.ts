import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_id: any;
  password: any;

   
  constructor(private loginservice:LoginService) { }  
  
  login : Login=new Login();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  loginform=new FormGroup({  
    user_id:new FormControl('' , [Validators.required ] ),  
    password:new FormControl('',[Validators.required]),  
     
  });  
  
  saveLogin(saveLogin:any){  
    this.login=new Login();     
    this.login.user_id=this.user_id.value;  
    this.login.password=this.password.value;   
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.loginservice.createLogin(this.login)  
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
    this.login = new Login();  
  }  
}
