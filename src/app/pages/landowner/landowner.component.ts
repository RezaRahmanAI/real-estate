import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LandownerData, Testimonial } from '../../models/model';
import { LandownerHeroComponent } from './landowner-hero/landowner-hero.component';
import { LandownerBenefitsComponent } from './landowner-benefits/landowner-benefits.component';
import { LandownerFormComponent } from './landowner-form/landowner-form.component';
import { LandownerTestimonialComponent } from './landowner-testimonial/landowner-testimonial.component';
import { AnimationService } from '../../services/animation.service';
import { TestimonialCarouselComponent } from "../../components/testimonial/testimonial.component";

@Component({
  selector: 'app-landowner',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LandownerHeroComponent,
    LandownerBenefitsComponent,
    LandownerFormComponent,
    LandownerTestimonialComponent,
    TestimonialCarouselComponent
],
  templateUrl: './landowner.component.html',
  styleUrls: ['./landowner.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandownerComponent implements AfterViewInit {
  
  constructor(private anim: AnimationService) {}

  ngAfterViewInit() {
    this.anim.animateOnScroll('.fade-up');
    this.anim.animateOnScroll('.zoom-in');
  }

  
  onFormSubmitted(data: LandownerData) {
    console.log('Partnership submission:', data);
    // handle backend call / toast
  }
}
