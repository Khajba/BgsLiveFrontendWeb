import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BgsLiveSharedModule } from 'src/app/shared/shared.module';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';
import { TransactionFilterComponent } from './user-transactions/transaction-filter/transaction-filter.component';
import { TransactionListComponent } from './user-transactions/transaction-list/transaction-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [EditProfileComponent, UserTransactionsComponent, TransactionFilterComponent, TransactionListComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    BgsLiveSharedModule
  ]
})
export class UserModule { }
