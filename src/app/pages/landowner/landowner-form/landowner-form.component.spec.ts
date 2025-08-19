import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandownerFormComponent } from './landowner-form.component';

describe('LandownerFormComponent', () => {
  let component: LandownerFormComponent;
  let fixture: ComponentFixture<LandownerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandownerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandownerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
