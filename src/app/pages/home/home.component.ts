import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectExploreComponent } from "../../components/project-explore/project-explore.components";
import { VisionBannerComponent } from "../../components/vision-banner/vision-banner.component";
import { TestimonialCarouselComponent } from "../../components/testimonial/testimonial.component";
import { ProjectSlideComponent } from "../../components/project-slide/project-slide.component";
import { FollowUpdateComponent } from "../../components/follow-update/follow-update.component";
import { SwiperSliderComponent } from "../../components/swiper-slider/swiper-slider.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectExploreComponent, VisionBannerComponent, TestimonialCarouselComponent, ProjectSlideComponent, FollowUpdateComponent, SwiperSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
