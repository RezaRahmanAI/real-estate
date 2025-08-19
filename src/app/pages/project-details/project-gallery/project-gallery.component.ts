import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css'],
})
export class ProjectGalleryComponent {
  @Input() gallery: any[] = [];
  @Input() baseUrl: string = '';
  @Output() imageError = new EventEmitter<Event>();
}
