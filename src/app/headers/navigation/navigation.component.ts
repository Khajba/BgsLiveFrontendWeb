import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthorizationService } from 'src/app/core/authorization/authorization-service';
import { UserService } from 'src/app/features/user/user.service';
import { AuthenticateUserModel } from 'src/app/models/authorization/authentificate-user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: AuthenticateUserModel = {}

  get isAuthenticated() {
    return this.authorizationService.isAuthenticated.value
  }

  showRegisterDialog: boolean = false;

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userDetails();
  }

  registerClick() {
    this.showRegisterDialog = !this.showRegisterDialog
  }

  singIn() {
    if (!this.user.username || !this.user.password) {
      this.messageService.add({ severity: 'error', detail: 'Enter All Field', summary: 'Error' })
    }

    this.login();
  }

  private login() {
    this.authorizationService.login(this.user).subscribe(
      response => {
        this.router.navigate([''])
      }
    )
  }

  private userDetails(){
    this.userService.getDetails().subscribe(
      response => {
        
      }
    )
  }



}
