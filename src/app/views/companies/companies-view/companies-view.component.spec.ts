import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesViewComponent } from './companies-view.component';

describe('CompaniesPageComponent', () => {
  let component: CompaniesViewComponent;
  let fixture: ComponentFixture<CompaniesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
