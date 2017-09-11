import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  allowButtonToEnter = false;
  userName = "";
  userStatus = "";

  constructor() { 
    setTimeout(() => {
      this.allowButtonToEnter = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateUserName() {
    this.userStatus = "Hi this is " + this.userName;
  }

}
