
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

export interface Testimonial {
  image?: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialCarouselComponent {
  @Input() testimonials: Testimonial[] = [];
  currentIndex = 0;
  defaultImage = 'https://via.placeholder.com/400x300?text=Testimonial+Image';

  prev() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.testimonials.length - 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex < this.testimonials.length - 1
        ? this.currentIndex + 1
        : 0;
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    if (imgElement.src !== this.defaultImage) {
      console.warn('Testimonial image failed to load, switching to fallback:', imgElement.src);
      imgElement.src = this.defaultImage;
    }
  }
}

