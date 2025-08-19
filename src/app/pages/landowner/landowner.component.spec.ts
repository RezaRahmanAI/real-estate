import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandownerComponent } from './landowner.component';

describe('LandownerComponent', () => {
  let component: LandownerComponent;
  let fixture: ComponentFixture<LandownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
