import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';

const routes: Routes = [
  {path: 'edit', component: EditProfileComponent},
  {path: 'transactions', component: UserTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
