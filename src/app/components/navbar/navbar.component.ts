import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelService } from '../../services/sidepanel.service';
import { NavbarScrollDirective } from '../../directives/navbar-scroll.directive';
import { SidePanelComponent } from "../side-panel/side-panel.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarScrollDirective, SidePanelComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public sidePanel: SidePanelService) {}
}
