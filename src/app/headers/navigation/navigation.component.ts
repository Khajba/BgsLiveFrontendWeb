import { Component, OnInit } from '@angular/core';
import { AuthenticateUserModel } from 'src/app/models/authorization/authentificate-user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: AuthenticateUserModel = {}

  showRegisterDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerClick() {
    this.showRegisterDialog = !this.showRegisterDialog
  }

}
