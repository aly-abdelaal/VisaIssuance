import { Injectable } from '@angular/core';

import * as rulesJson from './/data/rules-data.json';
import { Rule } from './rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor() { }

  getRules(): Rule[] {
    const rules: Rule[] = (((rulesJson as any).default) as Rule[]);
    return rules;
  }
}
