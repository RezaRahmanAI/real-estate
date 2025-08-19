import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css'],
})
export class ProjectHeaderComponent {
  @Input() project: any = null;
  @Input() baseUrl: string = '';
  @Output() imageError = new EventEmitter<Event>();

  onImageError(event: Event): void {
    this.imageError.emit(event);
  }
}
