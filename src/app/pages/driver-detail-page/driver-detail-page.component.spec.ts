import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailPageComponent } from './driver-detail-page.component';

describe('DriverDetailPageComponent', () => {
  let component: DriverDetailPageComponent;
  let fixture: ComponentFixture<DriverDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
