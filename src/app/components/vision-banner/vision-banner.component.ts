import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vision-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vision-banner.component.html',
  styleUrls: ['./vision-banner.component.css'],
})
export class VisionBannerComponent {}
