import { Component, OnInit } from '@angular/core';
import { TransactionFilterModel } from 'src/app/models/user-models/transaction-filter.model';

@Component({
  selector: 'app-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss']
})
export class TransactionFilterComponent implements OnInit {



  filter: TransactionFilterModel = { dateFrom: new Date(2020, 10, 10), dateTo: new Date(2020, 12, 10) }
  constructor() { }

  ngOnInit(): void {
  }

}
