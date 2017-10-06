import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material/button';
import { MdTabsModule } from '@angular/material/tabs';
import 'hammerjs';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
