import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MioLoginComponent } from './mio-login/mio-login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MioLoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
