import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandownerData } from '../../../models/model';

@Component({
  selector: 'app-landowner-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landowner-form.component.html',
  styleUrls: ['./landowner-form.component.css'],
})
export class LandownerFormComponent {
  landownerData: LandownerData = {
    name: '',
    phone: '',
    email: '',
    locality: '',
    landCategory: '',
    frontRoadWidth: '',
    facing: '',
    address: '',
    message: '',
  };

  @Output() submitted = new EventEmitter<LandownerData>();
  submitting = false;
  lastSubmitted = false;

  createData(): void {
    if (this.submitting) return;
    this.submitting = true;
    this.lastSubmitted = false;

    // simulate submission
    setTimeout(() => {
      this.submitted.emit(this.landownerData);
      this.submitting = false;
      this.lastSubmitted = true;

      // reset form data
      this.landownerData = {
        name: '',
        phone: '',
        email: '',
        locality: '',
        landCategory: '',
        frontRoadWidth: '',
        facing: '',
        address: '',
        message: '',
      };

      // auto-hide success after 4s
      setTimeout(() => {
        this.lastSubmitted = false;
      }, 4000);
    }, 1000);
  }
}
