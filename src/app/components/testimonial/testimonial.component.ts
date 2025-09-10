import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialService } from '../../services/testimonial.service';
import { Testimonial } from '../../models/model';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialCarouselComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  baseURL = environment.baseUrl;
  currentIndex = 0;
  private subscription: Subscription = new Subscription();

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.loadTestimonials();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadTestimonials(): void {
    this.subscription.add(
      this.testimonialService.getActiveTestimonials().subscribe({
        next: (res: Testimonial[]) => {
          this.testimonials = res.filter((testimonial) => testimonial.isActive); // Filter active testimonials
          if (this.testimonials.length === 0) {
            this.testimonialService.showError('No active testimonials found.');
          } else {
            this.currentIndex = 0; // Reset index
            this.testimonialService.showSuccess(
              'Testimonials loaded successfully!'
            );
          }
        },
        error: (err) => {
          console.error('Failed to load testimonials:', err);
          this.testimonialService.showError('Failed to load testimonials.');
        },
      })
    );
  }

  get currentTestimonial(): Testimonial | null {
    return this.testimonials.length > 0
      ? this.testimonials[this.currentIndex]
      : null;
  }

  next(): void {
    if (this.testimonials.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }
  }

  prev(): void {
    if (this.testimonials.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    }
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = `https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg`; // Fallback image
  }
}
