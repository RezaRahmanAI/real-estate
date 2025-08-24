import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-social.component.html',
  styleUrls: ['./floating-social.component.css'],
})
export class FloatingSocialComponent {
  isOpen = false;

  toggleSocialIcons(): void {
    this.isOpen = !this.isOpen;
  }
}
