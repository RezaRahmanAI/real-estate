import { Component, HostListener } from '@angular/core';
import { BlogCardComponent } from "../blog-card/blog-card.component";
import { BlogListComponent } from "../../pages/blog-list/blog-list.component";

@Component({
  selector: 'app-follow-update',
  standalone: true,
  imports: [BlogCardComponent, BlogListComponent],
  templateUrl: './follow-update.component.html',
  styleUrl: './follow-update.component.css',
})
export class FollowUpdateComponent {
  
  currentIndex = 0;
  slideDirection: 'next' | 'prev' | '' = '';
  private scrollTimeout: any;

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    // Debounce scroll events
    if (this.scrollTimeout) return;

    this.scrollTimeout = setTimeout(() => {
      this.scrollTimeout = null;
    }, 500); // 500ms debounce

    if (event.deltaY > 0) {
      this.next();
    } else if (event.deltaY < 0) {
      this.prev();
    }
  }

  prev() {
    this.slideDirection = 'prev';
    
      
    setTimeout(() => (this.slideDirection = ''), 500);
  }

  next() {
    this.slideDirection = 'next';

    setTimeout(() => (this.slideDirection = ''), 500);
  }


  
}
