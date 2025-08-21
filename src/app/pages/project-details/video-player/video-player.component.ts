import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FadeInDirective } from '../../../directives/fade-in.directive';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnChanges {
  @Input() youtubeUrl: string | undefined;
  safeYoutubeUrl: SafeResourceUrl | null = null;
  showModal: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['youtubeUrl'] && this.youtubeUrl) {
      const videoId = this.extractVideoId(this.youtubeUrl);
      if (videoId) {
        // Initial URL without autoplay
        this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoId}?rel=0`
        );
      } else {
        console.error('Invalid YouTube URL:', this.youtubeUrl);
        this.safeYoutubeUrl = null;
      }
    } else {
      this.safeYoutubeUrl = null;
    }
  }

  extractVideoId(url: string): string | null {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
    if (this.showModal && this.youtubeUrl) {
      const videoId = this.extractVideoId(this.youtubeUrl);
      if (videoId) {
        // Set URL with autoplay when modal opens
        this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
        );
      }
    }
  }
}
