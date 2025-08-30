import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css'],
})
export class ProjectHeaderComponent implements AfterViewInit {
  @Input() project: any; // Replace with your Project interface
  @Input() baseUrl: string = ''; // Base URL for API
  @ViewChild('parallaxContainer') parallaxContainer!: ElementRef;
  @ViewChild('parallaxImage') parallaxImage!: ElementRef;

  imageError: boolean = false;

  ngAfterViewInit() {
    this.updateParallax(); // Initial position
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateParallax();
  }

  updateParallax() {
    const container = this.parallaxContainer.nativeElement;
    const img = this.parallaxImage.nativeElement;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only apply parallax when container is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrollY = window.scrollY;
      const offset = rect.top + scrollY;
      const speed = 0.3; // Parallax speed (lower = slower)
      const translateY = (scrollY - offset) * speed;

      img.style.transform = `translateY(${translateY}px)`;
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/fallback.png';
    this.imageError = true;
  }
}
