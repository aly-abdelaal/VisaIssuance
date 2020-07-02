import { Injectable } from '@angular/core';

import { Applications } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getApplications(): Applications {
    let applications: Applications;

    applications = [
      {
        applicantName: 'Ali',
        passportNumber: 'P232',
        nationalityId: 125
      },
      {
        applicantName: 'Ahmed',
        passportNumber: 'P234',
        nationalityId: 125
      }
    ];

    return applications;
  }
}
