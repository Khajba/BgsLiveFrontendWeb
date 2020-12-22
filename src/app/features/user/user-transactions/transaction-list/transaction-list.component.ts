import { Component, OnInit } from '@angular/core';
import { TransactionStatus } from 'src/app/enums/transaction-status.enum';
import { TransactionType } from 'src/app/enums/transaction-type.enum';
import { Transaction } from 'src/app/models/user-models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [
    { status: TransactionStatus.success, amount: 25, operationType: TransactionType.bet, date: new Date(1992, 10, 10), fee: 0.5 },
    { status: 2, amount: 25, operationType: 1, date: new Date(1992, 10, 10), fee: 0.5 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
