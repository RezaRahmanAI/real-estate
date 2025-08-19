import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSpeechComponent } from './owner-speech.component';

describe('OwnerSpeechComponent', () => {
  let component: OwnerSpeechComponent;
  let fixture: ComponentFixture<OwnerSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerSpeechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
