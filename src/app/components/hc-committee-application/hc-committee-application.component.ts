import { Component, OnInit } from '@angular/core';
import { Rule } from '../../services/rule/rule.model';
import { RuleService } from '../../services/rule/rule.service';
import { LookupService } from '../../services/lookup/lookup.service';
import { Lookup } from '../../services/lookup/lookup.model';

@Component({
  selector: 'app-hc-committee-application',
  templateUrl: './hc-committee-application.component.html',
  styleUrls: ['./hc-committee-application.component.scss']
})
export class HcCommitteeApplicationComponent implements OnInit {

  ruleService: RuleService;
  rules: Rule[];

  actionLookup: Lookup[];
  reasonLookup: Lookup[];

  isShowDialog = false;
  Action: { type: string[]; reason: string[]; comment: string[]; };

  constructor(ruleService: RuleService,
              lookupService: LookupService) {
    this.Action = {
                  type: [],
                  reason: [],
                  comment: []
                };
    this.ruleService = ruleService;
    this.actionLookup = lookupService.getVisaTypeLookup();
    this.reasonLookup = lookupService.getApplicationStatusLookup();
  }

  ngOnInit(): void {
    this.rules = this.ruleService.getRules();
    this.isShowDialog = true;
  }

  showDialog(): void{
    this.isShowDialog = true;
  }

  submitAction(): void{
    this.isShowDialog = false;

  }

}
