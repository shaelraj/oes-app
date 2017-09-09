import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public _user: User;
  public _confirmPswd: string;

  constructor() {
    this._user = new User();
  }

  ngOnInit() {
  }

  public submit() {
    console.log('form submitted...');
  }

}
