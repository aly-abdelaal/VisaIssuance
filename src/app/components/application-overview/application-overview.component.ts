import { Component, OnInit } from '@angular/core';
import {Application} from '../../services/application/application.model';
import {ApplicationService} from '../../services/application/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application-overview.component.html',
  styleUrls: ['./application-overview.component.scss']
})
export class ApplicationOverviewComponent implements OnInit {

  applications: Application[];

  constructor(applicationService: ApplicationService) {
    this.applications = applicationService.getApplications();
  }

  ngOnInit(): void {
  }

}
