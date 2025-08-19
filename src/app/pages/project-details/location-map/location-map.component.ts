import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [CommonModule, RouterModule, SafeUrlPipe],
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css'],
})
export class LocationMapComponent {
  @Input() latitude?: string;
  @Input() longitude?: string;
}
