import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsIndexComponent } from './about-us-index.component';

describe('AboutUsIndexComponent', () => {
  let component: AboutUsIndexComponent;
  let fixture: ComponentFixture<AboutUsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
