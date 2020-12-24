import { Component, OnInit } from '@angular/core';
import { TransactionStatus } from 'src/app/enums/transaction-status.enum';
import { TransactionType } from 'src/app/enums/transaction-type.enum';
import { TransactionListModel } from 'src/app/models/user-models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions: TransactionListModel[] = [
    { statusId: TransactionStatus.success, amount: 25, transactionTypeId: TransactionType.bet, date: new Date(1992, 10, 10), fee: 0.5 },
    { statusId: 2, amount: 25, transactionTypeId: 1, date: new Date(1992, 10, 10), fee: 0.5 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
