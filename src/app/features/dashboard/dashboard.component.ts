import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    gsap.from('.card-hover', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    });
  }
}
