import { Injectable } from '@angular/core';
import { Lookup } from './lookup.model';
import * as visaTypesJson from './data/visatypes-lookups-data.json';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }

  getVisaTypeLookup(): Lookup[] {
    const visaTypes: Lookup[] = (((visaTypesJson as any).default) as Lookup[]);
    return visaTypes;
  }

}
