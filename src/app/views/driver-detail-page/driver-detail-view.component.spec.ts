import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailViewComponent } from './driver-detail-view.component';

describe('DriverDetailPageComponent', () => {
  let component: DriverDetailViewComponent;
  let fixture: ComponentFixture<DriverDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
