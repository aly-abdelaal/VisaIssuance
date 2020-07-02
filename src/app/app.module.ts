import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDefaultComponent } from './components/app-default/app-default.component';
import { ApplicationComponent } from './components/application/application.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    AppDefaultComponent,
    ApplicationComponent,
    ProfileComponent
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
