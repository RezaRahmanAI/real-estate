import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { HeroParallaxDirective } from '../../directives/hero-parallax.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FadeInDirective, HeroParallaxDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
