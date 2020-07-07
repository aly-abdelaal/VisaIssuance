import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredInfoCardComponent } from './sponsored-info-card.component';

describe('SponsoredInfoCardComponent', () => {
  let component: SponsoredInfoCardComponent;
  let fixture: ComponentFixture<SponsoredInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoredInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
