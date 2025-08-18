// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelService } from '../../services/sidepanel.service';
import { NavbarScrollDirective } from '../../directives/navbar-scroll.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarScrollDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public sidePanel: SidePanelService) {}
}
