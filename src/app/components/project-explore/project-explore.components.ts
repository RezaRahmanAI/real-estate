import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';
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
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './project-explore.component.html',
  styleUrl: './project-explore.component.css',
})
export class ProjectExploreComponent {
  projects: ExploreItem[] = [
    {
      id: 1,
      title: 'Ongoing Projects',
      route: '/projectcategoryOngoing',
      image: 'images/banner/banner-3.png',
    },
    {
      id: 2,
      title: 'Upcoming Projects',
      route: '/projectcategoryUpcoming',
      image: 'images/banner/banner_1.jpg',
    },
    {
      id: 3,
      title: 'Complete Projects',
      route: '/projectcategoryCompleted',
      image: 'images/banner/banner-3.png',
    },
  ];

  // constructor(private lenisService: LenisService) {}

  // ngOnInit() {
  //   this.lenisService.init();
  //   this.lenisService.onScroll((scroll) => {
  //     console.log('Scroll position:', scroll);
  //   });
  // }
}
