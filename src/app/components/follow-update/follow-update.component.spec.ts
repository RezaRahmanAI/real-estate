import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpdateComponent } from './follow-update.component';

describe('FollowUpdateComponent', () => {
  let component: FollowUpdateComponent;
  let fixture: ComponentFixture<FollowUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
