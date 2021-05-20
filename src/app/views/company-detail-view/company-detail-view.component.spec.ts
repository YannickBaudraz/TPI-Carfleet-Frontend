import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailViewComponent } from './company-detail-view.component';

describe('CompanyDetailPageComponent', () => {
  let component: CompanyDetailViewComponent;
  let fixture: ComponentFixture<CompanyDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
