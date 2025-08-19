import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroParallaxDirective } from '../../../directives/hero-parallax.directive';
import { FadeInDirective } from '../../../directives/fade-in.directive';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, HeroParallaxDirective, FadeInDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
