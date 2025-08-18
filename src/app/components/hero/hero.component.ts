import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { HeroParallaxDirective } from '../../directives/hero-parallax.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FadeInDirective, HeroParallaxDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {}
