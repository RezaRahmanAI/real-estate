import { Directive, ElementRef, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Directive({
  selector: '[appNavbarScroll]',
  standalone: true,
})
export class NavbarScrollDirective implements OnInit {
  private lastScroll = 0;
  private scrollUpDelta = 0;
  private scrollDownDelta = 0;
  private revealThreshold = 80;
  private hideThreshold = 80;
  private lenis!: Lenis;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const nav = this.el.nativeElement;

    // Initialize Lenis
    this.lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      lerp: 0.1,
      // direction: 'vertical',
      // gestureDirection: 'vertical',
    });

    const animate = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Listen to scroll events
    this.lenis.on('scroll', (event: any) => {
      const scroll = event.scroll;

      if (scroll <= 20) {
        nav.classList.remove('glass', 'hide');
        nav.classList.add('transparent');
        this.scrollUpDelta = 0;
        this.scrollDownDelta = 0;
      } else {
        if (scroll > this.lastScroll) {
          // Scrolling down
          this.scrollDownDelta += scroll - this.lastScroll;
          this.scrollUpDelta = 0;

          if (this.scrollDownDelta > this.hideThreshold) {
            nav.classList.add('hide');
            nav.classList.remove('glass', 'transparent');
            this.scrollDownDelta = 0;
          }
        } else {
          // Scrolling up
          this.scrollUpDelta += this.lastScroll - scroll;
          this.scrollDownDelta = 0;

          if (this.scrollUpDelta > this.revealThreshold) {
            nav.classList.remove('hide', 'transparent');
            nav.classList.add('glass');
            this.scrollUpDelta = 0;
          }
        }
      }

      this.lastScroll = scroll;
    });
  }
}
