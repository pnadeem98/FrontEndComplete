import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/ClassFiles/Account';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  accList:Account[]=[];
  
  constructor(private accSer: AccountService) { }

  ngOnInit(): void {
    this.accSer.accList().subscribe((response: Account[])=>this.accList=response)
  }

}
