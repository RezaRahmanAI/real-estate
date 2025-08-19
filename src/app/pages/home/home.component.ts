import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectExploreComponent } from "../../components/project-explore/project-explore.components";
import { VisionBannerComponent } from "../../components/vision-banner/vision-banner.component";
import { TestimonialCarouselComponent } from "../../components/testimonial/testimonial.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectExploreComponent, VisionBannerComponent, TestimonialCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
