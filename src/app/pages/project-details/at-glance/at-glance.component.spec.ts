import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtGlanceComponent } from './at-glance.component';

describe('AtGlanceComponent', () => {
  let component: AtGlanceComponent;
  let fixture: ComponentFixture<AtGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtGlanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
