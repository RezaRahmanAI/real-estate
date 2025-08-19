import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoMapComponent } from './contact-info-map.component';

describe('ContactInfoMapComponent', () => {
  let component: ContactInfoMapComponent;
  let fixture: ComponentFixture<ContactInfoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfoMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
