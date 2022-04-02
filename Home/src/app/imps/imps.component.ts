import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Benificiary } from '../add-payee/Benificiary';
import { Transaction } from '../Transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class IMPSComponent implements OnInit {

  trans:Transaction=new Transaction();

  submitted = false;  
  
  Transform=new FormGroup({  
    accNo:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    benId:new FormControl('',[Validators.required,]),  
    Amount:new FormControl()  
  });  

  constructor(private transSer: TransactionService) {}

  ngOnInit(): void {
    this.submitted=false;  
  }

  saveTrans(savetrans:any){  
    this.trans=new Transaction();    
    this.trans.accNo=savetrans.accNo;
    this.trans.benId=savetrans.benId;
    this.trans.Amount=savetrans.Amount;
    this.trans.transType= "IMPS"
    
    console.log(savetrans.accNo);
    this.submitted = true;  
    this.save();  
  }  

  save() {  
    this.transSer.addTrans(this.trans).subscribe(data => console.log(data));  
    this.trans= new Transaction();  
  }  


}
