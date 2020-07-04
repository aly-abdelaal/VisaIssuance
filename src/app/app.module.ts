import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDefaultComponent } from './components/app-default/app-default.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationComponent } from './components/application/application.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IgxGridModule } from 'igniteui-angular';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDefaultComponent,
    HomeComponent,
    ApplicationComponent,
    ProfileComponent,
    NotFound404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
