
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
  private revealThreshold = 80;
  private hideThreshold = 80;

  constructor(private el: ElementRef, private lenisService: LenisService) {}

  ngOnInit(): void {
    const nav = this.el.nativeElement;

    this.lenisService.onScroll((scroll: number) => {
      if (scroll <= 20) {
        nav.classList.remove('glass', 'hide');
        nav.classList.add('transparent');
        this.scrollUpDelta = 0;
        this.scrollDownDelta = 0;
      } else {
        if (scroll > this.lastScroll) {
          this.scrollDownDelta += scroll - this.lastScroll;
          this.scrollUpDelta = 0;

          if (this.scrollDownDelta > this.hideThreshold) {
            nav.classList.add('hide');
            nav.classList.remove('glass', 'transparent');
            this.scrollDownDelta = 0;
          }
        } else {
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

