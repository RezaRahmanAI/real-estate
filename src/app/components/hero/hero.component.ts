import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroParallaxDirective } from '../../directives/hero-parallax.directive';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeroParallaxDirective, FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {}
