import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailViewComponent } from './vehicle-detail-view.component';

describe('VehicleDetailPageComponent', () => {
  let component: VehicleDetailViewComponent;
  let fixture: ComponentFixture<VehicleDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
