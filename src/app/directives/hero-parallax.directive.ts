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
      this.el.nativeElement.style.backgroundPositionY = `${scroll * 0.3}px`;
    });
  }
}
