import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

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
export class TeamModalComponent implements AfterViewInit {
  @Input() selectedTeamMember: TeamMember | null = null;
  @Output() toggle = new EventEmitter<void>();
  @Output() imageError = new EventEmitter<Event>();

  ngAfterViewInit() {
    gsap.from('.modal-backdrop', {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
    });
    gsap.from('.modal-content', {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3,
    });
    gsap.from(
      '.modal-content img, .modal-content h3, .modal-content p, .modal-content a',
      {
        opacity: 0,
        y: 20,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
    gsap.utils.toArray('.modal-content a').forEach((link: any) => {
      gsap.to(link, {
        y: -2,
        scale: 1.1,
        duration: 0.4,
        ease: 'power1.out',
        paused: true,
        on: {
          mouseenter: () => gsap.to(link, { y: -2, scale: 1.1, duration: 0.4 }),
          mouseleave: () => gsap.to(link, { y: 0, scale: 1, duration: 0.4 }),
        },
      });
    });
  }

  onToggle() {
    this.toggle.emit();
  }

  onImageError(event: Event) {
    this.imageError.emit(event);
  }
}
