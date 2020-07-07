import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorInfromationComponent } from './sponsor-infromation.component';

describe('SponsorInfromationComponent', () => {
  let component: SponsorInfromationComponent;
  let fixture: ComponentFixture<SponsorInfromationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorInfromationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorInfromationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
