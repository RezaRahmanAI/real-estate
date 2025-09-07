import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contactus, LandownerData } from '../../../models/model';
import { ContactusService } from '../../../services/contactus.service';

@Component({
  selector: 'app-landowner-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './landowner-form.component.html',
  styleUrls: ['./landowner-form.component.css'],
})
export class LandownerFormComponent implements OnInit {
  contactForm: FormGroup;

  submitMessage: string | null = null;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contactusService: ContactusService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = null;

    const contact: Contactus = this.contactForm.value;

    this.contactusService.create(contact).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitMessage = response; // e.g., "Form Successfully Submitted"
        this.contactForm.reset();
        console.log('Form submitted successfully:', response);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitMessage = 'Error submitting form. Please try again.';
        console.error('Submission error:', err);
      },
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}