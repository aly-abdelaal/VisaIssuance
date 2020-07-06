import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcCommitteeApplicationComponent } from './hc-committee-application.component';

describe('HcCommitteeApplicationComponent', () => {
  let component: HcCommitteeApplicationComponent;
  let fixture: ComponentFixture<HcCommitteeApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcCommitteeApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcCommitteeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
