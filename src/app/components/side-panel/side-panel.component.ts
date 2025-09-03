import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenisService } from '../../services/lenis.service';
import { SidePanelService } from '../../services/sidepanel.service';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnDestroy {
  private routerSub: Subscription;

  constructor(
    public sidePanel: SidePanelService,
    private lenisService: LenisService,
    private router: Router
  ) {
    // Close the panel automatically when route changes
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sidePanel.close();
      }
    });
  }

  scrollToSection(sectionId: string) {
    this.lenisService.lenis.scrollTo(`#${sectionId}`, { duration: 0.8 });
    this.sidePanel.close();
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
