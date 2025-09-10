// project-slide.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { ProjectService } from '../../services/project.service';
import { RouterLink } from '@angular/router';

interface Slide {
  id: number | string;
  image: string;
  alt: string;
  author: string;
  title: string;
  topic: string;
  des: string;
  thumbnailTitle: string;
  thumbnailDescription: string;
}

@Component({
  selector: 'app-project-slide',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-slide.component.html',
  styleUrls: ['./project-slide.component.css'],
  providers: [ProjectService],
})
export class ProjectSlideComponent implements OnInit, OnDestroy {
  slides: Slide[] = [];
  timeRunning = 3000;
  timeAutoNext = 7000;
  runTimeOut: any;
  runNextAuto: any;
  baseUrl = environment.baseUrl;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getActiveProjects().subscribe((projects) => {
      this.slides = projects.map((project) => ({
        id: project.id,
        image: project.thumbnail
          ? `${this.baseUrl}/api/attachment/get/${project.thumbnail}`
          : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        alt: project.name || 'Project image',
        author: project.category || 'Unknown Category',
        title: project.name || 'Untitled Project',
        topic: project.type || 'Project Type',
        des: `Explore our ${project.name || 'latest project'} in ${
          project.category || 'various'
        } settings.`,
        thumbnailTitle: project.name || 'Untitled',
        thumbnailDescription: project.category || 'Category',
      }));
      this.startAutoSlide();
    });

    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    if (nextDom) {
      nextDom.onclick = () => this.showSlider('next');
    }
    if (prevDom) {
      prevDom.onclick = () => this.showSlider('prev');
    }
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  showSlider(type: 'next' | 'prev'): void {
    const carouselDom = document.querySelector('.carousel');
    const sliderDom = carouselDom?.querySelector('.carousel .list');
    const thumbnailBorderDom = carouselDom?.querySelector(
      '.carousel .thumbnail'
    );
    const sliderItemsDom = sliderDom?.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll(
      '.carousel .thumbnail .item'
    );

    if (
      !sliderDom ||
      !thumbnailBorderDom ||
      !sliderItemsDom ||
      !thumbnailItemsDom
    )
      return;

    this.clearTimers();

    if (type === 'next') {
      sliderDom.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom?.classList.add('next');
    } else {
      sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom?.classList.add('prev');
    }

    this.runTimeOut = setTimeout(() => {
      carouselDom?.classList.remove('next', 'prev');
    }, this.timeRunning);

    this.startAutoSlide();
  }

  goToSlide(index: number): void {
    const carouselDom = document.querySelector('.carousel');
    const sliderDom = carouselDom?.querySelector('.carousel .list');
    const thumbnailBorderDom = carouselDom?.querySelector(
      '.carousel .thumbnail'
    );
    const sliderItemsDom = sliderDom?.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = thumbnailBorderDom?.querySelectorAll(
      '.carousel .thumbnail .item'
    );

    if (
      !sliderDom ||
      !thumbnailBorderDom ||
      !sliderItemsDom ||
      !thumbnailItemsDom
    )
      return;

    this.clearTimers();

    const currentIndex = Array.from(sliderItemsDom).findIndex((item) =>
      item.classList.contains('active')
    );
    const direction = index > currentIndex ? 'next' : 'prev';

    while (Array.from(sliderItemsDom)[0] !== sliderItemsDom[index]) {
      if (direction === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
      }
    }

    carouselDom?.classList.add(direction);
    this.runTimeOut = setTimeout(() => {
      carouselDom?.classList.remove('next', 'prev');
    }, this.timeRunning);

    this.startAutoSlide();
  }

  private startAutoSlide(): void {
    this.clearTimers();
    this.runNextAuto = setTimeout(() => {
      this.showSlider('next'); // Call directly instead of clicking #next
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
