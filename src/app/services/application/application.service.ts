import { Injectable } from '@angular/core';

import {Application} from './application.model';
import { Applications } from './mock-applications';
import * as applicationsJson from './/data/applications-data.json';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getApplications(): Application[] {
    const applications: Application[] = (((applicationsJson as any).default) as Application[]);
    return applications;
  }
}
