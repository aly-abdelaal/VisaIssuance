import { Injectable } from '@angular/core';

import {Application} from './application.model';
import { Applications } from './mock-applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getApplications(): Application[] {
    return Applications;
  }
}
