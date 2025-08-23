import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent{
  @Output() formSubmit = new EventEmitter<void>();

  

  

  onSubmit(): void {
    this.formSubmit.emit();
  }
}
