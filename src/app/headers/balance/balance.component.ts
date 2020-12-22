import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/features/user/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balance: number;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance() {
    this.userService.getBalance().subscribe(
      response => {
        this.balance = response
      }
    )
  }

}
