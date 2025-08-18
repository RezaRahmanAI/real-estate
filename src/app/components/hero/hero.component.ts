// src/app/components/hero/hero.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroParallaxDirective } from '../../directives/hero-parallax.directive';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LenisService } from '../../services/lenis.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeroParallaxDirective, FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private lenis: LenisService) {}

  ngOnInit() {
    // Lenis is already initialized via LenisService constructor
  }
}
