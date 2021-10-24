import { Component, Input, OnInit } from '@angular/core';

import { USERS } from '../currentUsers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() err!: string;
  userName: string = '';
  userPassword: string = '';
  nextPage: string = '/login';

  constructor() { }

  ngOnInit(): void {
  }

  checkAuth(){
    for (const user of USERS) {
      if (this.userName === user.userName && this.userPassword === user.userPassword) {
        this.nextPage = '/refresh-config';
      }
    }
    this.err = 'Invalid username or password'
  }
}
