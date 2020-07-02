import { Component, OnInit } from '@angular/core';
import {Application} from '../../services/application/application.model';
import {ApplicationService} from '../../services/application/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  applications: Application[];

  constructor(applicationService: ApplicationService) {
    this.applications = applicationService.getApplications();
  }

  ngOnInit(): void {
  }

}
