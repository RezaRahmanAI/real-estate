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
          console.log(
            'IntersectionObserver:',
            entry.target.id,
            entry.isIntersecting
          );
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('visible');
            observer.unobserve(this.el.nativeElement); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 } // Increased threshold for reliability
    );
    observer.observe(this.el.nativeElement);
  }
}
