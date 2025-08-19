import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-at-glance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './at-glance.component.html',
  styleUrls: ['./at-glance.component.css'],
})
export class AtGlanceComponent {
  @Input() project: any = null;
  @Input() baseUrl: string = '';
  @Output() imageError = new EventEmitter<Event>();

  onImageError(event: Event): void {
    this.imageError.emit(event);
  }
}
