import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { TransactionService } from '../../Services/transaction.service';
import { Transaction } from 'src/app/ClassFiles/Transaction';
import { Account } from 'src/app/ClassFiles/Account';
import { Benificiary } from '../add-payee/Benificiary';
import { BenificiaryService } from 'src/app/Services/benificiary.service';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class IMPSComponent implements OnInit {


  accList:Account[]=[];

  benList:Benificiary[]=[];

  trans:Transaction=new Transaction();

  submitted = false;  
  
  Transform=new FormGroup({  
    accNo:new FormControl('' , [Validators.required, Validators.minLength(5) ] ),  
    benId:new FormControl('',[Validators.required]),  
    balanceamount:new FormControl('',[Validators.required])  
  });  

  constructor(private transSer:TransactionService, private accSer: AccountService, private benSer:BenificiaryService) {}

  get name() { return this.Transform.get('accNo'); }

  ngOnInit(): void {


    this.submitted=false;  
     this.accSer.accList().subscribe((response: Account[])=>this.accList=response)
     this.benSer.benList().subscribe((response: Benificiary[])=>this.benList=response)
  }

  saveBen(saveben:any){  
    console.log(saveben);
    this.trans=new Transaction
    this.trans.accNo=12345;
    this.trans.benId=12;
    this.trans.balanceamount=500;
    this.trans.transType='IMPS';
      console.log(saveben.acc_no);
      this.submitted = true;  
      this.save();  
  }  

  save() {  
    
    this.transSer.addTrans(this.trans).subscribe(data => console.log(data));  
    this.trans = new Transaction();  
  }  




}
