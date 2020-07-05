import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDefaultComponent } from './components/app-default/app-default.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationOverviewComponent } from './components/application-overview/application-overview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationListComponent } from './components/application-overview/application-list/application-list.component';
import { IgxGridModule } from 'igniteui-angular';
import { IgxAvatarModule } from 'igniteui-angular';
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    AppDefaultComponent,
    HomeComponent,
    ApplicationOverviewComponent,
    ProfileComponent,
    NotFound404Component,
    HeaderComponent,
    FooterComponent,
    ApplicationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxAvatarModule,
    IgxComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
