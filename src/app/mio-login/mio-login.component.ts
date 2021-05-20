import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../common/login.service';
import { HttpClient } from '@angular/common/http';
import { User } from "./user";


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

 constructor(private router: Router, private loginService:LoginService, private http: HttpClient) { }

  ngOnInit() {   
    this.loginFail = false; 
  }

  encryptData() {
    /* Crypto Username e Password */
    this.http.get<any>('https://r89h4896t4h189q465sdjys.000webhostapp.com/api/?md5&username=' + this.username + '&password=' + this.password).subscribe(data => {
      this.username = data.username;
      this.password = data.password;

      this.getRemoteDataBase();
    })
  }

  getRemoteDataBase() {
    this.http.get<any>('https://r89h4896t4h189q465sdjys.000webhostapp.com/api/?users').subscribe( data => { 
      /* Se l'username esiste mi procuro la password associata */
      for (let i = 0; i < data.length; i++) {   
        if(data[i].hasOwnProperty(this.username)) {
          this.utentiJson.password = data[i][this.username]["password"];
        }
      }

      this.autenticazione();
    }) 
  }  

  autenticazione() {    
    /* Controllo che i dati combacino */
    if(this.password == this.utentiJson.password)
    {
      this.loginService.setUserData(this.username, this.password);
      this.loginService.setAutorizzazione(true);
      this.router.navigate(['/generatore']);
    }
    else {
      this.username = "";
      this.password = "";
      this.loginFail = true;
    }
  }
}