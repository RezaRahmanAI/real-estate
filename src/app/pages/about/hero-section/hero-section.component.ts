import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroParallaxDirective } from '../../../directives/hero-parallax.directive';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, HeroParallaxDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
