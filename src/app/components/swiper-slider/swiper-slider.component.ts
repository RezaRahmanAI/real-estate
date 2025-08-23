import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment'; // Adjust path as needed
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

interface Slide {
  id: string;
  image: string;
  name: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.css'],
})
export class SwiperSliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [];
  baseUrl = environment.baseUrl;
  currentTranslate = 0;
  slideWidth = 400 + 16; // 400px (max-w-[400px]) + 16px (gap-x-4)
  speed = 0.5; // pixels per frame
  animationFrameId!: number;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
    this.animateSlide();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.slides = projects.map((project) => ({
          id: project.id,
          image: project.thumbnail
            ? `${this.baseUrl}/api/attachment/get/${project.thumbnail}`
            : 'https://via.placeholder.com/400x500', // Fallback image
          name: project.name || 'Untitled Project',
          location: project.address || 'Unknown',
          type: project.type || '—',
        }));
        // Duplicate slides for endless loop
        this.slides = [...this.slides, ...this.slides];
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        this.projectService.showError('Failed to load projects');
      },
    });
  }

  animateSlide() {
    this.currentTranslate -= this.speed;
    const totalWidth = this.slideWidth * this.slides.length;
    if (Math.abs(this.currentTranslate) >= totalWidth / 2) {
      this.currentTranslate = 0; // Reset to start for seamless loop
    }
    this.animationFrameId = requestAnimationFrame(() => this.animateSlide());
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/400x500'; // Fallback image on error
  }
}
