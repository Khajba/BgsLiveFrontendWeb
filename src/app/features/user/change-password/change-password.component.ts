import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/bgslive-components/bgs-toast/toast.service';
import { Severity } from 'src/app/enums/severity-enum';
import { Password } from 'src/app/models/user-models/password.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  password: Password = {}

  constructor(
    private readonly userService: UserService,
    private readonly toastService: ToastService) { }

  ngOnInit(): void {
  }

  changePassword() {
    if (this.password.newPassword == this.password.confirmPassword) {
      this.userService.changePassword(this.password).subscribe(
        response => {
          this.toastService.add({ severity: Severity.Error, message: "Passwords do not match" })
        }
      )
    }
  }

}
