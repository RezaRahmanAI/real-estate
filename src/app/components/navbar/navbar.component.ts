
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenisService } from '../../services/lenis.service';
import { NavbarScrollDirective } from '../../directives/navbar-scroll.directive';
import { SidePanelComponent } from "../side-panel/side-panel.component";
import { SidePanelService } from '../../services/sidepanel.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarScrollDirective, SidePanelComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public sidePanel: SidePanelService, private lenisService: LenisService) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.side-panel') &&
      !target.closest('.menu-btn-wrapper')
    ) {
      this.sidePanel.close();
    }
  }

  scrollToSection(sectionId: string) {
    this.lenisService.lenis.scrollTo(`#${sectionId}`, { duration: 0.8 });
    this.sidePanel.close();
  }
}
