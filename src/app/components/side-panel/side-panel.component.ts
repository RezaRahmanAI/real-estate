import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenisService } from '../../services/lenis.service';
import { SidePanelService } from '../../services/sidepanel.service';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent {
  constructor(
    public sidePanel: SidePanelService,
    private lenisService: LenisService
  ) {}

  scrollToSection(sectionId: string) {
    this.lenisService.lenis.scrollTo(`#${sectionId}`, { duration: 0.8 });
    this.sidePanel.close();
  }
}
