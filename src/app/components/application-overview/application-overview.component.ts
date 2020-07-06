import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application/application.service';
import { LookupService } from '../../services/lookup/lookup.service';
import { Application } from '../../services/application/application.model';
import { Lookup } from '../../services/lookup/lookup.model';
import { ApplicationSearchRequest } from '../../services/application/application.search.model';

@Component({
  selector: 'app-application-overview',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  applicationService: ApplicationService;
  applications: Application[];
  visaTypeLookup: Lookup[];
  applicationStatusLookup: Lookup[];
  applicationPriorityLookup: Lookup[];
  countryLookup: Lookup[];

  // search parameters
  searchRequest: ApplicationSearchRequest;

  constructor(applicationService: ApplicationService,
              lookupService: LookupService) {
    this.initSearchRequest();
    this.applicationService = applicationService;
    this.visaTypeLookup = lookupService.getVisaTypeLookup();
    this.applicationStatusLookup = lookupService.getApplicationStatusLookup();
    this.applicationPriorityLookup = lookupService.getApplicationPriorityLookup();
    this.countryLookup = lookupService.getCountryLookup();
  }

  ngOnInit(): void {
  }

  initSearchRequest(): void {
    this.searchRequest = {
      applicationPriority: [],
      applicationStatus: [],
      endDate: new Date(Date.now()),
      isAutoLoad: false,
      isMaxApps: false,
      nationalityFrom: [],
      nationalityTo: [],
      sponsorNumber: 0,
      startDate: new Date(Date.now()),
      visaType: []
    };
  }

  searchApplications(): void {
    this.applications = this.applicationService.getApplications();

    this.applications = this.applications.filter(
      item =>
        (this.searchRequest.sponsorNumber == 0 ||
         item.sponsorNumber as number == this.searchRequest.sponsorNumber as number)
        &&
        (this.searchRequest.visaType.length === 0 ||
         this.searchRequest.visaType.includes(item.visaTypeId.toString()))
        &&
        (this.searchRequest.nationalityFrom.length === 0 ||
         this.searchRequest.nationalityFrom.includes(item.nationalityId.toString()))
        &&
        (this.searchRequest.nationalityTo.length === 0 ||
         this.searchRequest.nationalityTo.includes(item.nationalityId.toString()))
      );
  }

  filterApplicatoins(): void {
  }
}
