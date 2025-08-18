import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarScrollDirective } from '../../directives/navbar-scroll.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarScrollDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
