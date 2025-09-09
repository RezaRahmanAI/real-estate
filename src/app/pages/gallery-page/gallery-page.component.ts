import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryService } from '../../services/gallery.service';
import { environment } from '../../environments/environment';
import { ContactHeroComponent } from './gallery-hero/gallery-hero.component';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, ContactHeroComponent],
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
})
export class GalleryPageComponent implements OnInit, AfterViewInit {
  galleryItems: GalleryItem[] = [];
  lightboxOpen = false;
  currentIndex = 0;
  baseUrl = environment.baseUrl;

  @Output() imageError = new EventEmitter<Event>();

  constructor(
    private galleryService: GalleryService,
    private anim: AnimationService,
    private cdr: ChangeDetectorRef // Add ChangeDetectorRef for manual change detection
  ) {}

  ngAfterViewInit() {
    this.anim.animateOnScroll('.fade-up');
    this.anim.animateOnScroll('.zoom-in');
  }

  ngOnInit(): void {
    this.loadGalleryItems();
  }

  async loadGalleryItems(): Promise<void> {
    try {
      const items = await this.galleryService.getAll();
      this.galleryItems = items
        .filter((item) => item.isActive)
        .sort((a, b) => a.order - b.order);
      this.cdr.detectChanges(); // Ensure UI updates after loading items
    } catch (error) {
      console.error('Failed to load gallery items:', error);
    }
  }

  get currentItem(): GalleryItem | null {
    return this.galleryItems[this.currentIndex] || null;
  }

  onImageError(event: Event): void {
    this.imageError.emit(event);
  }

  openLightbox(index: number): void {
    this.currentIndex = index;
    this.lightboxOpen = true;
    this.cdr.detectChanges(); // Ensure modal updates
    console.log('Lightbox opened at index:', index);
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.cdr.detectChanges(); // Ensure modal closes properly
    console.log('Lightbox closed');
  }

  nextItem(event?: Event): void {
    if (event) event.stopPropagation(); // Prevent event bubbling
    if (this.galleryItems.length) {
      this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
      this.cdr.detectChanges(); // Trigger change detection
      console.log('Next item:', this.currentIndex, this.currentItem);
    }
  }

  prevItem(event?: Event): void {
    if (event) event.stopPropagation(); // Prevent event bubbling
    if (this.galleryItems.length) {
      this.currentIndex =
        (this.currentIndex - 1 + this.galleryItems.length) %
        this.galleryItems.length;
      this.cdr.detectChanges(); // Trigger change detection
      console.log('Previous item:', this.currentIndex, this.currentItem);
    }
  }
}
