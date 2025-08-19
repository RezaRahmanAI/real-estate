import {
  Component,
  OnInit,
  signal,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit, AfterViewInit {
  baseURL = environment.baseUrl;
  list = signal<any[]>([]);
  countdowns = signal<string[]>([]);

  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit() {
    this.getBlogs();
  }

  ngAfterViewInit() {
    this.animateOnScroll();
  }

  getBlogs() {
    this.http
      .get(`${this.baseURL}/api/website/getblogs`)
      .subscribe((res: any) => {
        this.list.set(res);
        this.startCountdown();
        // Animate again once blogs are loaded
        setTimeout(() => this.animateOnScroll(), 100);
      });
  }

  startCountdown() {
    this.updateCountdowns();
    setInterval(() => this.updateCountdowns(), 1000);
  }

  updateCountdowns() {
    const now = new Date();
    this.countdowns.set(
      this.list().map((item) => {
        if (!item.offerDate) return 'No Offer';
        const diff = new Date(item.offerDate).getTime() - now.getTime();
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          return `${this.pad(days)} Days ${this.pad(hours)}:${this.pad(
            minutes
          )}:${this.pad(seconds)}`;
        } else {
          return 'Offer Expired';
        }
      })
    );
  }

  pad(n: number) {
    return String(n).padStart(2, '0');
  }

  private animateOnScroll() {
    const sections = this.el.nativeElement.querySelectorAll('[data-animate]');
    sections.forEach((section: HTMLElement) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }
}
