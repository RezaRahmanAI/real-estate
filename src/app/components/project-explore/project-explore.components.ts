import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LenisService } from '../../services/lenis.service';

export interface ExploreItem {
  id: number;
  title: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-project-explore',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-explore.component.html',
  styleUrl: './project-explore.component.css',
})
export class ProjectExploreComponent {
  projects: ExploreItem[] = [
    {
      id: 1,
      title: 'Ongoing Projects',
      route: '/projects',
      image: 'images/icons/hook.png',
    },
    {
      id: 2,
      title: 'Upcoming Projects',
      route: '/projects',
      image: 'images/icons/coming-soon.png',
    },
    {
      id: 3,
      title: 'Complete Projects',
      route: '/projects',
      image: 'images/icons/architect.png',
    },
    {
      id: 4,
      title: 'All Projects',
      route: '/projects',
      image: 'images/icons/architect.png',
    },
  ];
}
