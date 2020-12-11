import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showRegisterDialog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerClick() {
    this.showRegisterDialog = !this.showRegisterDialog
  }

}
