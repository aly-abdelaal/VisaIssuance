import { Injectable } from '@angular/core';

import {Application} from './application.model';
import { Applications } from './mock-applications';
import * as data from '../../mock-data/applications-data.json';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getApplications(): Application[] {
    const applications: Application[] = (((data as any).default) as Application[]);
    return applications;
  }
}
