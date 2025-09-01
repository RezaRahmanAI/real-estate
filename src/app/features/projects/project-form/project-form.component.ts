import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/model';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent {
  @Input() set project(value: Project | null) {
    this._project = value ? { ...value } : { ...this.defaultProject };
    this.contentType = this._project.contentType || '';
    if (this._project.offerDateTime) {
      this._project.offerDateTime = this.formatDateForInput(
        this._project.offerDateTime
      );
    }
  }
  @Input() mode: 'create' | 'edit' = 'create';
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();
  selectedThumbnail: File | null = null;
  selectedContent: File | null = null;
  selectedPdf: File | null = null; // New field for PDF
  contentType: string = '';

  private defaultProject: Project = {
    id: '',
    name: '',
    description: '',
    address: '',
    thumbnail: '',
    category: '',
    type: '',
    content: '',
    contentType: '',
    offerTitle: '',
    offerDateTime: '',
    isActive: true,
    landArea: '',
    builtUpArea: '',
    height: '',
    numberOfApartments: 0,
    numberOfParking: 0,
    unitPerFloors: '',
    sizeOfEachApartment: '',
    mapLink: '',
    // longitude: '',
    pdfFile: '',
    videoLink: '',
  };

  _project: Project = this.defaultProject;

  constructor(private projectService: ProjectService) {}

  onThumbnailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedThumbnail = input.files[0];
    }
  }

  onContentChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedContent = input.files[0];
    }
  }

  onPdfChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedPdf = input.files[0];
      this._project.pdfFile = this.selectedPdf.name; // Update pdfFileName
    }
  }

  formatDateForInput(date: string): string {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  }

  saveProject() {
    const formData = new FormData();
    formData.append('name', this._project.name || '');
    formData.append('description', this._project.description || '');
    formData.append('address', this._project.address || '');
    formData.append('category', this._project.category || '');
    formData.append('type', this._project.type || '');
    formData.append('contentType', this.contentType || '');
    formData.append('offerTitle', this._project.offerTitle || '');
    formData.append('offerDateTime', this._project.offerDateTime || '');
    formData.append('landArea', this._project.landArea || '');
    formData.append('builtUpArea', this._project.builtUpArea || '');
    formData.append('height', this._project.height || '');
    formData.append('mapLink', this._project.mapLink || '');
    // formData.append('longitude', this._project.longitude || '');
    formData.append('pdfFile', this._project.pdfFile || '');
    formData.append('videoLink', this._project.videoLink || '');
    formData.append(
      'numberOfApartments',
      this._project.numberOfApartments?.toString() || '0'
    );
    formData.append(
      'numberOfParking',
      this._project.numberOfParking?.toString() || '0'
    );
    formData.append('unitPerFloors', this._project.unitPerFloors || '');
    formData.append(
      'sizeOfEachApartment',
      this._project.sizeOfEachApartment || ''
    );
    if (this.selectedThumbnail) {
      formData.append('thumbnail', this.selectedThumbnail);
    }
    if (this.selectedContent) {
      formData.append('content', this.selectedContent);
    }
    if (this.selectedPdf) {
      formData.append('pdfFile', this.selectedPdf); // Add PDF to FormData
    }
    if (this.mode === 'edit') {
      formData.append('id', this._project.id || '');
    }

    const serviceMethod =
      this.mode === 'create'
        ? this.projectService.createProject(formData)
        : this.projectService.editProject(formData);
    serviceMethod.subscribe({
      next: (response) => {
        this.projectService.showSuccess(
          response ||
            `Project ${
              this.mode === 'create' ? 'created' : 'updated'
            } successfully`
        );
        this.saved.emit();
      },
      error: (error) => {
        this.projectService.showError(
          `Failed to ${this.mode === 'create' ? 'create' : 'update'} Project: ${
            error.message || 'Unknown error'
          }`
        );
        console.error(error);
      },
    });
  }

  closeModal() {
    this.close.emit();
  }
}
