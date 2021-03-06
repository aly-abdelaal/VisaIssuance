import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule } from 'igniteui-angular';
import { IgxAvatarModule } from 'igniteui-angular';
import { IgxComboModule } from 'igniteui-angular';
import { IgxDatePickerModule } from 'igniteui-angular';
import { IgxCheckboxModule } from 'igniteui-angular';
import { IgxSelectModule } from 'igniteui-angular';
import { IgxDialogModule } from 'igniteui-angular';
import { IgxTabsModule } from 'igniteui-angular';
import { IgxIconModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDefaultComponent } from './components/app-default/app-default.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationOverviewComponent } from './components/application-overview/application-overview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationListComponent } from './components/application-overview/application-list/application-list.component';
import { ApplicationStateIconComponent } from './components/application-overview/application-state-icon/application-state-icon.component';
import { HcCommitteeApplicationComponent } from './components/hc-committee-application/hc-committee-application.component';
import { ApplicationDetailsModule } from './components/application-details/application-details.module';

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
    ApplicationListComponent,
    ApplicationStateIconComponent,
    HcCommitteeApplicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxAvatarModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxTabsModule,
    IgxIconModule,
    ApplicationDetailsModule,
    AppRoutingModule,
    IgxDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
