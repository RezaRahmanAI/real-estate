import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactData } from '../../../models/model';
import { FadeInDirective } from '../../../directives/fade-in.directive';

@Component({
  selector: 'app-contact-from',
  standalone: true,
  imports: [CommonModule, FormsModule, FadeInDirective],
  templateUrl: './contact-from.component.html',
  styleUrl: './contact-from.component.css',
})
export class ContactFromComponent implements OnInit {
  contactData: ContactData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  submitting = false;
  submitted = false;
  errorMessage = '';

  ngOnInit(): void {}

  private validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private validatePhone(phone: string): boolean {
    return /^[0-9+\-()\s]{7,20}$/.test(phone);
  }

  createData(form: NgForm): void {
    if (this.submitting) return;
    this.errorMessage = '';
    if (form.invalid) {
      this.errorMessage = 'Please complete required fields.';
      return;
    }
    if (!this.validateEmail(this.contactData.email)) {
      this.errorMessage = 'Invalid email address.';
      return;
    }
    if (!this.validatePhone(this.contactData.phone)) {
      this.errorMessage = 'Invalid phone number.';
      return;
    }

    this.submitting = true;

    // Simulate API / replace with real POST
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      console.log('Lead captured:', this.contactData);
      form.resetForm();
      this.contactData = {
        name: '',
        phone: '',
        email: '',
        message: '',
      };
    }, 1000);
  }
}
