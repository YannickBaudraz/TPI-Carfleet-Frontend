import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversViewComponent } from './drivers-view.component';

describe('DriversPageComponent', () => {
  let component: DriversViewComponent;
  let fixture: ComponentFixture<DriversViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
