import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../services/application/application.service';
import {LookupService} from '../../services/lookup/lookup.service';
import {Application} from '../../services/application/application.model';
import {Lookup} from '../../services/lookup/lookup.model';
import {LookupTranslated} from '../../services/lookup/lookup.model';
import {LookupName} from '../../services/lookup/lookup.model';

@Component({
  selector: 'app-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  applications: Application[];
  visaTypeLookup: Lookup[];
  applicationStatusLookup: Lookup[];
  applicationPriorityLookup: Lookup[];
  countryLookup: Lookup[];

  // search parameters
  startDate: Date = new Date(Date.now());
  endDate: Date = new Date(Date.now());
  isMaxApps = false;
  isAutoLoad = false;

  constructor(applicationService: ApplicationService,
              lookupService: LookupService) {
    this.applications = applicationService.getApplications();
    this.visaTypeLookup = lookupService.getVisaTypeLookup();
    this.applicationStatusLookup = lookupService.getApplicationStatusLookup();
    this.applicationPriorityLookup = lookupService.getApplicationPriorityLookup();
    this.countryLookup = lookupService.getCountryLookup();
  }

  ngOnInit(): void {
  }

}
