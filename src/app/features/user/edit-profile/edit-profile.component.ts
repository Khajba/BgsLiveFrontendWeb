import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-models/user-details.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: UserDetails = {}

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  updateClick() {
    this.userService.update(this.user.phoneNumber).subscribe(
      response => {
        this.user.phoneNumber = response;
        this.getDetails();

      }
    )
  }

  private getDetails() {
    this.userService.getDetails().subscribe(
      response => {

      }
    )
  }

}
