import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationDetailsRoutingModule } from './application-details-routing.module';
import { IgxTabsModule } from 'igniteui-angular';
import { IgxCardModule } from 'igniteui-angular';
import { IgxIconModule } from 'igniteui-angular';
import { IgxGridModule } from 'igniteui-angular';
import { IgxAvatarModule } from 'igniteui-angular';
import { IgxComboModule } from 'igniteui-angular';
import { IgxDatePickerModule } from 'igniteui-angular';
import { IgxCheckboxModule } from 'igniteui-angular';
import { IgxSelectModule } from 'igniteui-angular';

import { ApplicationDetailsComponent } from './application-details.component';
import { SponsorInfromationComponent } from './sponsor-infromation/sponsor-infromation.component';
import { SponsorInfoCardComponent } from './sponsor-info-card/sponsor-info-card.component';
import { SponsoredInfoCardComponent } from './sponsored-info-card/sponsored-info-card.component';

@NgModule({
  declarations: [ApplicationDetailsComponent,
    SponsorInfromationComponent,
    SponsorInfoCardComponent,
    SponsoredInfoCardComponent],
  imports: [
    CommonModule,
    ApplicationDetailsRoutingModule,
    IgxGridModule,
    IgxAvatarModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxTabsModule,
    IgxIconModule,
    IgxCardModule
  ]
})
export class ApplicationDetailsModule { }
