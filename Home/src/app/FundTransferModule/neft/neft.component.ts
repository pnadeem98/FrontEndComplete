import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/ClassFiles/Account';
import { Transaction } from 'src/app/ClassFiles/Transaction';
import { BenificiaryService } from 'src/app/Services/benificiary.service';
import { AccountService } from '../../Services/account.service';
import { TransactionService } from '../../Services/transaction.service';
import { Benificiary } from '../add-payee/Benificiary';

@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {

  accList:Account[]=[];
  
  
  benList:Benificiary[]=[];
  
  trans:Transaction=new Transaction();

  submitted = false;  
  
  Transform=new FormGroup({  
    accNo:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    benId:new FormControl('',[Validators.required,]),  
    balanceamount:new FormControl()  
  });  
  constructor(private transSer:TransactionService,private accSer: AccountService,private benSer:BenificiaryService) {}

  ngOnInit(): void {
    this.submitted=false;  
    this.accSer.accList().subscribe((response: Account[])=>this.accList=response)
  }

  saveBen(saveben:any){  
    this.trans=new Transaction
    this.trans.accNo=saveben.accNo;
    this.trans.benId=saveben.benId;
    this.trans.balanceamount=saveben.balanceamount;
    this.trans.transType=saveben.transType;
      console.log(saveben.acc_no);
      this.submitted = true;  
      this.save();  
  }  

  save() {  
    this.transSer.addTrans(this.trans).subscribe(data => console.log(data));  
    this.trans = new Transaction();  
  }  

}
