import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
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
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [
    trigger('headingAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [animate('0.6s ease-out')]),
    ]),
    trigger('cardAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        query('.team_card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(400, [
            animate(
              '0.6s 0.3s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('cardHover', [
      state(
        'inactive',
        style({
          transform: 'translateY(0)',
          boxShadow:
            '0 4px 6px -1px rgba(96, 153, 102, 0.1), 0 2px 4px -2px rgba(96, 153, 102, 0.1)',
        })
      ),
      state(
        'active',
        style({
          transform: 'translateY(-4px)',
          boxShadow:
            '0 10px 15px -3px rgba(96, 153, 102, 0.2), 0 4px 6px -4px rgba(96, 153, 102, 0.2)',
        })
      ),
      transition('inactive <=> active', [animate('0.4s ease-out')]),
    ]),
    trigger('linkHover', [
      state('inactive', style({ transform: 'translateY(0) scale(1)' })),
      state('active', style({ transform: 'translateY(-2px) scale(1.1)' })),
      transition('inactive <=> active', [animate('0.4s ease-out')]),
    ]),
  ],
})
export class TeamComponent implements AfterViewInit {
  @Input() team: TeamMember[] = [];
  @Output() toggle = new EventEmitter<TeamMember | null>();

  hoverStates: {
    [key: number]: {
      card: 'active' | 'inactive';
      facebook: 'active' | 'inactive';
      twitter: 'active' | 'inactive';
      linkedin: 'active' | 'inactive';
    };
  } = {};

  ngAfterViewInit() {
    this.team.forEach((member) => {
      this.hoverStates[member.id] = {
        card: 'inactive',
        facebook: 'inactive',
        twitter: 'inactive',
        linkedin: 'inactive',
      };
    });
  }

  onToggle(member: TeamMember) {
    this.toggle.emit(member);
  }

  onCardHover(memberId: number, state: 'active' | 'inactive') {
    this.hoverStates[memberId].card = state;
  }

  onLinkHover(
    memberId: number,
    linkType: 'facebook' | 'twitter' | 'linkedin',
    state: 'active' | 'inactive'
  ) {
    this.hoverStates[memberId][linkType] = state;
  }
}
