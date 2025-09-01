import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/model';

@Component({
  selector: 'app-project-edit',
  standalone: true,
  imports: [ProjectFormComponent, CommonModule, RouterModule],
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent implements OnInit {
  project: Project | null = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProject(projectId).subscribe({
        next: (data) => {
          this.project = data;
        },
        error: (error) => {
          this.projectService.showError(
            `Failed to fetch Project: ${error.message || 'Unknown error'}`
          );
          console.error(error);
          this.router.navigate(['/dashboard/projects']);
        },
      });
    } else {
      this.router.navigate(['/dashboard/projects']);
    }
  }

  onProjectSaved() {
    this.router.navigate(['/dashboard/projects']);
  }
}
