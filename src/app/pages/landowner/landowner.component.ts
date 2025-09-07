import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandownerHeroComponent } from './landowner-hero/landowner-hero.component';
import { LandownerBenefitsComponent } from './landowner-benefits/landowner-benefits.component';
import { LandownerFormComponent } from './landowner-form/landowner-form.component';
import { AnimationService } from '../../services/animation.service';
import { TestimonialCarouselComponent } from '../../components/testimonial/testimonial.component';

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
    TestimonialCarouselComponent,
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
}
