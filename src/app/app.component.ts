import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VisionBannerComponent } from "./components/vision-banner/vision-banner.component";
import { TestimonialCarouselComponent } from "./components/testimonial/testimonial.component";
import { ProjectExploreComponent } from "./components/project-explore/project-explore.components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    PropertiesComponent,
    ContactComponent,
    FooterComponent,
    VisionBannerComponent,
    TestimonialCarouselComponent,
    ProjectExploreComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
