import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image?: string;
  description?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

@Component({
  selector: 'app-team-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css'],
})
export class TeamModalComponent  {
  @Input() selectedTeamMember: TeamMember | null = null;
  @Output() toggle = new EventEmitter<void>();
  @Output() imageError = new EventEmitter<Event>();



  onToggle() {
    this.toggle.emit();
  }

  onImageError(event: Event) {
    this.imageError.emit(event);
  }
}
