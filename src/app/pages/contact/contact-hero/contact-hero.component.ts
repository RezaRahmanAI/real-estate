import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-hero.component.html',
  styleUrl: './contact-hero.component.css',
})
export class ContactHeroComponent {}
