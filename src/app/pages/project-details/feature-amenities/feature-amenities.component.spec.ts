import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAmenitiesComponent } from './feature-amenities.component';

describe('FeatureAmenitiesComponent', () => {
  let component: FeatureAmenitiesComponent;
  let fixture: ComponentFixture<FeatureAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAmenitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
