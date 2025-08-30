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

  

  testis: Testimonial[] = [
    {
      name: 'Harsh P.',
      description:
        "As a busy professional, I don't have a lot of time to manage my investments, but this has made it possible for me to stay on top of my portfolio.",
      image: '/images/banner/banner-3.png',
    },
    {
      name: 'Sarah K.',
      description:
        "This has revolutionized how I handle my investments. It's easy to use and provides real-time insights.",
      image: '/images/banner/banner-3.png',
    },
  ];

  onFormSubmitted(data: LandownerData) {
    console.log('Partnership submission:', data);
    // handle backend call / toast
  }
}
