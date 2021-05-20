import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesViewComponent } from './vehicles-view.component';

describe('VehiclesPageComponent', () => {
  let component: VehiclesViewComponent;
  let fixture: ComponentFixture<VehiclesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
