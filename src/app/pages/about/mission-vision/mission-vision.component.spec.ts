import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVisionComponent } from './mission-vision.component';

describe('MissionVisionComponent', () => {
  let component: MissionVisionComponent;
  let fixture: ComponentFixture<MissionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
