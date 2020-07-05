import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../services/application/application.service';
import {LookupService} from '../../services/lookup/lookup.service';
import {Application} from '../../services/application/application.model';
import {Lookup} from '../../services/lookup/lookup.model';

@Component({
  selector: 'app-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  applications: Application[];
  visaTypeLookup: Lookup[];

  constructor(applicationService: ApplicationService,
              lookupService: LookupService) {
    this.applications = applicationService.getApplications();
    this.visaTypeLookup = lookupService.getVisaTypeLookup();
  }

  ngOnInit(): void {
  }

}
