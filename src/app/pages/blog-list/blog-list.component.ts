import {
  Component,
  OnInit,
  signal,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  baseURL = environment.baseUrl;
  list = signal<any[]>([]);
  countdowns = signal<string[]>([]);

  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit() {
    this.getBlogs();
  }



  getBlogs() {
    this.http
      .get(`${this.baseURL}/api/website/getblogs`)
      .subscribe((res: any) => {
        this.list.set(res);
        this.startCountdown();
        // Animate again once blogs are loaded
        
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

  
}
