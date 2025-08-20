import { Component, OnInit } from '@angular/core';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects-index',
  standalone: true,
  imports: [ProjectFormComponent, CommonModule, RouterLink],
  templateUrl: './projects-index.component.html',
  styleUrls: ['./projects-index.component.css'],
})
export class ProjectsIndexComponent implements OnInit {
  projects: Project[] = [];
  showCreateModal = false;
  showEditModal = false;
  selectedProject: Project | null = null;
  apiBaseUrl = environment.baseUrl;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        this.projectService.showError(
          'Failed to fetch Projects: ' + (error.message || 'Unknown error')
        );
        console.error(error);
      },
    });
  }

  openCreateModal() {
    this.selectedProject = null;
    this.showCreateModal = true;
  }

  openEditModal(project: Project) {
    this.selectedProject = { ...project };
    this.showEditModal = true;
  }

  closeModal() {
    this.showCreateModal = false;
    this.showEditModal = false;
    this.selectedProject = null;
  }

  onProjectSaved() {
    this.fetchProjects();
    this.closeModal();
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe({
      next: (response) => {
        this.projectService.showSuccess(
          response || 'Project deleted successfully'
        );
        this.fetchProjects();
      },
      error: (error) => {
        this.projectService.showError(
          `Failed to delete Project: ${error.message || 'Unknown error'}`
        );
        console.error(error);
      },
    });
  }

  toggleProjectActive(id: string, value: boolean) {
    this.projectService.toggleProjectActive(id, value).subscribe({
      next: (response) => {
        this.projectService.showSuccess(
          response ||
            `Project ${value ? 'activated' : 'deactivated'} successfully`
        );
        this.fetchProjects();
      },
      error: (error) => {
        this.projectService.showError(
          `Failed to ${value ? 'activate' : 'deactivate'} Project: ${
            error.message || 'Unknown error'
          }`
        );
        console.error(error);
      },
    });
  }
}
