import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  properties = [
    {
      img: 'https://images.unsplash.com/photo-1572120360610-d971b9b6393f?auto=format&fit=crop&w=800&q=80',
      title: 'Modern Family House',
      details: '$500,000 · 4 Beds · 3 Baths',
    },
    {
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Villa',
      details: '$1,200,000 · 6 Beds · 5 Baths',
    },
    {
      img: 'https://images.unsplash.com/photo-1600047509807-ba8f99c71c99?auto=format&fit=crop&w=800&q=80',
      title: 'City Apartment',
      details: '$350,000 · 2 Beds · 2 Baths',
    },
  ];
}
