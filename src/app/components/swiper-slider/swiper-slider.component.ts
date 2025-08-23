import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  liked: boolean;
}

@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.css',
})
export class SwiperSliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1549414210-9114d5e1f0e8?w=1200',
      title: 'Mountain Lake',
      liked: false,
    },
    {
      image:
        'https://images.unsplash.com/photo-1508921912187-b64906f3b0e7?w=1200',
      title: 'City Nightscape',
      liked: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1550856980-0a256a004457?w=1200',
      title: 'Forest Pathway',
      liked: false,
    },
    {
      image:
        'https://images.unsplash.com/photo-1501785885235-95a9478f7e96?w=1200',
      title: 'Rocky Coast',
      liked: false,
    },
    {
      image:
        'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1200',
      title: 'Autumn Forest',
      liked: false,
    },
  ];

  currentTranslate = 0;
  slideWidth = 260; // 250px + 10px margin
  speed = 0.5; // pixels per frame
  animationFrameId!: number;

  ngOnInit() {
    this.animateSlide();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }

  animateSlide() {
    this.currentTranslate -= this.speed;
    const totalWidth = this.slideWidth * this.slides.length;
    if (Math.abs(this.currentTranslate) >= totalWidth) {
      this.currentTranslate = 0;
    }
    this.animationFrameId = requestAnimationFrame(() => this.animateSlide());
  }

  toggleLike(slide: Slide) {
    slide.liked = !slide.liked;
  }
}
