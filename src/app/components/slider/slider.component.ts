import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { environment } from '../../environments/environment';
import { ProjectService } from '../../services/project.service';
import { Router, RouterLink } from '@angular/router';
import { Project } from '../../models/model';
import { Subscription } from 'rxjs';

interface Slide {
  id: string;
  image: string;
  name: string;
  category: string;
  address: string;
  type: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [];
  baseUrl = environment.baseUrl;
  private subscription: Subscription = new Subscription();
  private splideInstance: Splide | null = null;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.subscription.add(
      this.projectService.getProjects().subscribe({
        next: (projects: Project[]) => {
          this.slides = projects.map((project) => ({
            id: project.id,
            image: project.thumbnail
              ? `${this.baseUrl}/api/attachment/get/${project.thumbnail}`
              : 'https://via.placeholder.com/400x80',
            name: project.name || 'Untitled Project',
            category: project.category || 'Unknown',
            address: project.address,
            type: project.type || '—',
          }));
          this.initializeSplide();
        },
        error: (err) => {
          console.error('Error loading projects:', err);
          
          this.projectService.showError('Failed to load projects');
        },
      })
    );
  }

  initializeSplide(): void {
    
    if (this.splideInstance) {
      this.splideInstance.destroy();
    }

    
    setTimeout(() => {
      this.splideInstance = new Splide('#splide01', {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        focus: 'center',
        breakpoints: {
          767: {
            perPage: 1,
          },
        },
      });

      this.splideInstance.mount();

     
      document.querySelector('.next-splide')?.addEventListener('click', () => {
        this.splideInstance?.go('>');
      });

      document.querySelector('.prev-splide')?.addEventListener('click', () => {
        this.splideInstance?.go('<');
      });
    }, 0); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.splideInstance) {
      this.splideInstance.destroy();
    }
  }
}
