import { Component, Input, OnInit } from '@angular/core';
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
export class TestimonialCarouselComponent implements OnInit {
  @Input() testimonials: Testimonial[] = [];
  currentIndex = 0;

  defaultImage = 'https://via.placeholder.com/400x300?text=Testimonial+Image';

  ngOnInit() {
    // Provide dummy testimonials if none are passed via @Input
    if (this.testimonials.length === 0) {
      this.testimonials = [
        {
          image: 'https://randomuser.me/api/portraits/women/44.jpg',
          name: 'Emily Johnson',
          description:
            'The service was amazing! Everything went smoothly and I felt truly supported through the process.',
        },
        {
          image: 'https://randomuser.me/api/portraits/men/36.jpg',
          name: 'Michael Smith',
          description:
            'Very professional and reliable. I am extremely satisfied with my experience and would recommend it to anyone.',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/65.jpg',
          name: 'Sophia Williams',
          description:
            'I love how easy everything was. The team really listened to my needs and delivered beyond expectations.',
        },
      ];
    }
  }

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
      console.warn(
        'Testimonial image failed to load, switching to fallback:',
        imgElement.src
      );
      imgElement.src = this.defaultImage;
    }
  }
}
