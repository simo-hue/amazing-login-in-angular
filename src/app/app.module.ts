import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MioLoginComponent } from './mio-login/mio-login.component';
import { RouterModule } from '@angular/router';
import { RegistratiComponent } from './registrati/registrati.component';

const LISTA_ROUTER = [
  {path:''  ,component:MioLoginComponent},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(LISTA_ROUTER),  HttpClientModule],
  exports: [RouterModule],
  declarations: [ AppComponent, MioLoginComponent, RegistratiComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
