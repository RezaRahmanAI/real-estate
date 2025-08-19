import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ProjectItem {
  id: number | string;
  name: string;
  category: string;
  type: string;
  thumbnail: string;
  location: string;
  canSchedule?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('categorySelect') categorySelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('typeSelect') typeSelect!: ElementRef<HTMLSelectElement>;

  baseUrl = environment.baseUrl;
  state = {
    list: [] as ProjectItem[],
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const category = this.categorySelect?.nativeElement.value || 'all';
    const type = this.typeSelect?.nativeElement.value || 'all';

    const params = new URLSearchParams();
    if (category !== 'all') params.append('category', category);
    if (type !== 'all') params.append('type', type);

    this.http
      .get<ProjectItem[]>(
        `${this.baseUrl}/api/website/getprojects?${params.toString()}`
      )
      .subscribe({
        next: (data) => {
          this.state.list = data;
        },
        error: (err) => {
          console.error('Error fetching projects:', err);
          this.state.list = [];
        },
      });
  }

  resetFilters(): void {
    if (this.categorySelect) this.categorySelect.nativeElement.value = 'all';
    if (this.typeSelect) this.typeSelect.nativeElement.value = 'all';
    this.getProject();
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src !== '/images/fallback.png') {
      img.src = '/images/fallback.png';
    }
  }
}
