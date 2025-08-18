import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('opacity-100', 'translate-y-0');
            this.el.nativeElement.classList.remove(
              'opacity-0',
              'translate-y-12'
            );
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.el.nativeElement);
  }
}
