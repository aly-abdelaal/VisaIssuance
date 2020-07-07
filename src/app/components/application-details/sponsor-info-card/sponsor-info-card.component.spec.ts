import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorInfoCardComponent } from './sponsor-info-card.component';

describe('SponsorInfoCardComponent', () => {
  let component: SponsorInfoCardComponent;
  let fixture: ComponentFixture<SponsorInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
