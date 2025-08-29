import { AfterViewInit, Component } from '@angular/core';
import { VisionBannerComponent } from '../../components/vision-banner/vision-banner.component';
import { TestimonialCarouselComponent } from '../../components/testimonial/testimonial.component';
import { ProjectSlideComponent } from '../../components/hero-slide/project-slide.component';
import { FollowUpdateComponent } from '../../components/follow-update/follow-update.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProjectExploreComponent } from '../../components/project-explore/project-explore.components';
import { AnimationService } from '../../services/animation.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectExploreComponent,
    VisionBannerComponent,
    TestimonialCarouselComponent,
    ProjectSlideComponent,
    FollowUpdateComponent,
    SliderComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  constructor(private anim: AnimationService) {}

  ngAfterViewInit() {
    this.anim.animateOnScroll('.fade-up');
    this.anim.animateOnScroll('.zoom-in');
  }
}
