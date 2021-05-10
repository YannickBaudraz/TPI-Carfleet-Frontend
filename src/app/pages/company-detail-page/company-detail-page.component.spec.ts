import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailPageComponent } from './company-detail-page.component';

describe('CompanyDetailPageComponent', () => {
  let component: CompanyDetailPageComponent;
  let fixture: ComponentFixture<CompanyDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
