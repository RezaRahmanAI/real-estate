import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FadeInDirective } from '../../../directives/fade-in.directive';

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
  imports: [CommonModule, FadeInDirective],
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css'],
  animations: [
    trigger('modalBackdrop', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.6s ease-out')]),
    ]),
    trigger('modalContent', [
      state('void', style({ opacity: 0, transform: 'scale(0.9)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [animate('0.6s 0.3s ease-out')]),
    ]),
    trigger('modalElements', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [animate('0.6s 0.5s ease-out')]),
    ]),
    trigger('linkHover', [
      state('inactive', style({ transform: 'translateY(0) scale(1)' })),
      state('active', style({ transform: 'translateY(-2px) scale(1.1)' })),
      transition('inactive <=> active', [animate('0.4s ease-out')]),
    ]),
  ],
})
export class TeamModalComponent {
  @Input() selectedTeamMember: TeamMember | null = null;
  @Output() toggle = new EventEmitter<void>();
  @Output() imageError = new EventEmitter<Event>();
  
  hoverStates: { [key: string]: 'active' | 'inactive' } = {
    facebook: 'inactive',
    twitter: 'inactive',
    linkedin: 'inactive',
  };


  onToggle() {
    this.toggle.emit();
  }

  onImageError(event: Event) {
    this.imageError.emit(event);
  }

  onLinkHover(linkType: 'facebook' | 'twitter' | 'linkedin', state: 'active' | 'inactive') {
    this.hoverStates[linkType] = state;
  }
}
