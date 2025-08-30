import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
