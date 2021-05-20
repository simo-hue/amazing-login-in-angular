import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MioLoginComponent } from './mio-login/mio-login.component';
import { RouterModule } from '@angular/router';

const LISTA_ROUTER = [
  {path:''  ,component:MioLoginComponent},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(LISTA_ROUTER) ],
  declarations: [ AppComponent, MioLoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
