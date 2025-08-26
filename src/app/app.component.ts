import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { FloatingSocialComponent } from "./components/floating-social/floating-social.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    FloatingSocialComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'real-estate';

  constructor(private router: Router) {}

  isDashboardRoute(): boolean {
    return this.router.url.startsWith('/dashboard');
  }
}
