import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BenificiaryService } from '../../Services/benificiary.service';
import { Benificiary } from './Benificiary';


@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  beni:Benificiary=new Benificiary();

  submitted = false;  
  
  Benificiarysaveform=new FormGroup({  
    benName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    benAccNo:new FormControl('',[Validators.required,]),  
    benNickName:new FormControl()  
  });  
  constructor(private benSer:BenificiaryService,private router: Router,) {}

  ngOnInit(): void {
    this.submitted=false;  
  }

  saveBen(saveben:any){  
    this.beni=new Benificiary()
      this.beni.benName=saveben.benName;
      this.beni.benAccNo=saveben.benAccNo;
      this.beni.benNickName=saveben.benNickName;
      console.log(saveben.benName);
      this.submitted = true;  
      this.save();  

  }  

  save() {  
    this.benSer.createBenificairy(this.beni).subscribe(data => console.log(data));  
    this.beni = new Benificiary();  
    alert("Benificiary added Successful")
    this.router.navigate(['fundtransfer'])
  }  

}
