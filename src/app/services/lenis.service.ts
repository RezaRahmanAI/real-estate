import { Injectable } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Injectable({ providedIn: 'root' })
export class LenisService {
  private lenis!: Lenis;

  constructor() {
    this.init();
  }

  private init() {
    this.lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  onScroll(callback: (scroll: number) => void) {
    this.lenis.on('scroll', (event: { scroll: number }) => {
      callback(event.scroll);
    });
  }
}
