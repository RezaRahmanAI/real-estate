import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FadeInDirective } from '../../../directives/fade-in.directive';

@Component({
  selector: 'app-contact-info-map',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './contact-info-map.component.html',
  styleUrl: './contact-info-map.component.css',
})
export class ContactInfoMapComponent {
  isMapLoaded = false;

  onMapLoad(): void {
    this.isMapLoaded = true;
  }
}
