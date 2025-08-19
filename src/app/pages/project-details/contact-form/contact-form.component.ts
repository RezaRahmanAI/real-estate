import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements AfterViewInit {
  @Output() formSubmit = new EventEmitter<void>();

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    gsap.from('.contact_form', {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact_form',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  onSubmit(): void {
    this.formSubmit.emit();
  }
}
