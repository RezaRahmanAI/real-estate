import { Directive, ElementRef, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Directive({
  selector: '[appHeroParallax]',
  standalone: true,
})
export class HeroParallaxDirective implements OnInit {
  private lenis!: Lenis;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      lerp: 0.1, // use lerp for smoothing
      // direction: 'vertical',
      // gestureDirection: 'vertical',
    });

    const animate = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    this.lenis.on('scroll', (event: any) => {
      // 'event' has scroll, velocity, direction
      const scroll = event.scroll;
      this.el.nativeElement.style.backgroundPositionY = `${scroll * 0.3}px`;
    });
  }
}
