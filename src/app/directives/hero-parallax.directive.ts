
import { Directive, ElementRef, OnInit } from '@angular/core';
import { LenisService } from '../services/lenis.service';


@Directive({
  selector: '[appHeroParallax]',
  standalone: true,
})
export class HeroParallaxDirective implements OnInit {
  constructor(private el: ElementRef, private lenisService: LenisService) {}

  ngOnInit(): void {
    this.lenisService.onScroll((scroll: number) => {
      const position = Math.max(-100, Math.min(-scroll * 0.2, 100));
      this.el.nativeElement.style.backgroundPositionY = `${position}px`;
    });
  }
}
