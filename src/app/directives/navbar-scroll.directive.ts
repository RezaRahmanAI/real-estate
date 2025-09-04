import { Directive, ElementRef, OnInit } from '@angular/core';
import { LenisService } from '../services/lenis.service';


@Directive({
  selector: '[appNavbarScroll]',
  standalone: true,
})
export class NavbarScrollDirective implements OnInit {
  private lastScroll = 0;
  private scrollUpDelta = 0;
  private scrollDownDelta = 0;
  private hideThreshold = 80;

  constructor(private el: ElementRef, private lenisService: LenisService) {}

  ngOnInit(): void {
    const nav = this.el.nativeElement;

    this.lenisService.onScroll((scroll: number) => {
      if (scroll <= 20) {
        nav.classList.remove('hide-navbar');
      } else {
        if (scroll > this.lastScroll) {
          this.scrollDownDelta += scroll - this.lastScroll;
          this.scrollUpDelta = 0;
          if (this.scrollDownDelta > this.hideThreshold) {
            nav.classList.add('hide-navbar');
            this.scrollDownDelta = 0;
          }
        } 
      }
      this.lastScroll = scroll;
    });
  }
}


