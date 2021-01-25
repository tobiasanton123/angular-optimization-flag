import { Component, OnInit } from '@angular/core';

export interface User {
  userId: number;
  name: string;
  email: string;
  role: string;
  permissions?: any[];
  userRole?: any;
  userRoleForEntity?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: User = {
    email: 'max.mustermann@test.de',
    userId: 123456789,
    name: 'max mustermann',
    role: 'admin'

  };

  constructor() {

   }

  ngOnInit(): void {
  }

}
