import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  autorizzato: boolean;

  username: string;
  password: string;

  constructor() {
    this.autorizzato = false;
  }

  setAutorizzazione(autorizzato:boolean) {
    this.autorizzato = autorizzato;
  }

  isAutorizzato() {
    return this.autorizzato;
  }


  setUserData(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getUsername() {
    return this.username;
  }
  getPassword() {
    return this.password;
  }

}