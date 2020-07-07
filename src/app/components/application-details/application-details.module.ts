import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationDetailsComponent } from './application-details.component';
import { SponsorInfromationComponent } from './sponsor-infromation/sponsor-infromation.component';
import { ApplicationDetailsRoutingModule } from './application-details-routing.module';
import { SponsorInfoCardComponent } from './sponsor-info-card/sponsor-info-card.component';

@NgModule({
  declarations: [ApplicationDetailsComponent,
    SponsorInfromationComponent,
    SponsorInfoCardComponent],
  imports: [
    CommonModule,
    ApplicationDetailsRoutingModule
  ],
  exports: [
    SponsorInfromationComponent
  ]
})
export class ApplicationDetailsModule { }
