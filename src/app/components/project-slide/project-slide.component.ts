import { Component, OnDestroy, OnInit } from '@angular/core';
import { Slide } from '../../models/model';
import { ProjectSlideService } from '../../services/project-slide.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-slide.component.html',
  styleUrl: './project-slide.component.css',
  providers: [ProjectSlideService],
})
export class ProjectSlideComponent implements OnInit, OnDestroy {
  slides: Slide[] = [];
  currentSlideIndex = 0;
  timeRunning = 3000;
  timeAutoNext = 7000;
  runTimeOut: any;
  runNextAuto: any;

  constructor(private projectSlideService: ProjectSlideService) {}

  ngOnInit(): void {
    this.projectSlideService.getSlides().subscribe((slides) => {
      this.slides = slides;
      this.startAutoSlide();
    });
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  showSlider(type: 'next' | 'prev'): void {
    this.clearTimers();

    if (type === 'next') {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
    } else {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    }

    this.runTimeOut = setTimeout(() => {
      document.querySelector('.carousel')?.classList.remove('next', 'prev');
    }, this.timeRunning);

    document.querySelector('.carousel')?.classList.add(type);
    this.startAutoSlide();
  }

  goToSlide(index: number): void {
    this.clearTimers();
    this.currentSlideIndex = index;
    document.querySelector('.carousel')?.classList.add('next');
    this.runTimeOut = setTimeout(() => {
      document.querySelector('.carousel')?.classList.remove('next', 'prev');
    }, this.timeRunning);
    this.startAutoSlide();
  }

  private startAutoSlide(): void {
    this.runNextAuto = setTimeout(() => {
      this.showSlider('next');
    }, this.timeAutoNext);
  }

  private clearTimers(): void {
    if (this.runTimeOut) {
      clearTimeout(this.runTimeOut);
    }
    if (this.runNextAuto) {
      clearTimeout(this.runNextAuto);
    }
  }
}