import { Injectable } from '@angular/core';
import { Lookup } from './lookup.model';
import { LookupTranslated } from './lookup.model';
import * as visaTypesJson from './data/visa-type-lookup.json';
import * as ApplicationStatusJson from './data/application-status-lookup.json';
import * as ApplicationPriorityJson from './data/application-priority-lookup.json';
import * as CountryJson from './data/country-lookup.json';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }

  getVisaTypeLookup(): Lookup[] {
    const visaTypes: Lookup[] = (((visaTypesJson as any).default) as Lookup[]);
    return visaTypes;
  }

  getApplicationStatusLookup(): Lookup[] {
    const visaTypes: Lookup[] = (((ApplicationStatusJson as any).default) as Lookup[]);
    return visaTypes;
  }

  getApplicationPriorityLookup(): Lookup[] {
    const visaTypes: Lookup[] = (((ApplicationPriorityJson as any).default) as Lookup[]);
    return visaTypes;
  }

  getCountryLookup(): Lookup[] {
    const countries: LookupTranslated[] = (((CountryJson as any).default) as LookupTranslated[]);
    return countries.map(item => {
      const lookup: Lookup = {id: item.loopkupId, name: item.name.en};
      return lookup;
    });
  }
}
