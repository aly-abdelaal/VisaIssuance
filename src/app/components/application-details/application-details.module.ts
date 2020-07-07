import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationDetailsComponent } from './application-details.component';
import { SponsorInfromationComponent } from './sponsor-infromation/sponsor-infromation.component';
import { ApplicationDetailsRoutingModule } from './application-details-routing.module';

@NgModule({
  declarations: [ApplicationDetailsComponent,
    SponsorInfromationComponent],
  imports: [
    CommonModule,
    ApplicationDetailsRoutingModule
  ],
  exports: [
    SponsorInfromationComponent
  ]
})
export class ApplicationDetailsModule { }
