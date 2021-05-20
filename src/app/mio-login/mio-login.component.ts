import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mio-login',
  templateUrl: './mio-login.component.html',
  styleUrls: ['./mio-login.component.css']
})
export class MioLoginComponent implements OnInit {


  username: string;
  password: string;
  loginFail: boolean;

  encrypt: string;

  utentiJson: User = {
    username: "",
    password: ""
  };

  

}