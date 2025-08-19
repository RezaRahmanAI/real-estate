import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landowner-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landowner-hero.component.html',
  styleUrls: ['./landowner-hero.component.css'],
})
export class LandownerHeroComponent {}
