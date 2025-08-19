import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-related-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './related-projects.component.html',
  styleUrls: ['./related-projects.component.css'],
})
export class RelatedProjectsComponent implements OnChanges {
  @Input() projects: any[] = [];
  @Input() baseUrl: string = '';
  @Output() imageError = new EventEmitter<Event>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    // No animation logic needed anymore
  }

  onImageError(event: Event): void {
    this.imageError.emit(event);
  }

  onProjectSelect(projectId: number): void {
    this.router
      .navigate(['/projectdetails', projectId], {
        onSameUrlNavigation: 'reload',
      })
      .then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
