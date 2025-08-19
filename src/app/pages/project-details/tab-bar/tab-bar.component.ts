import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [],
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css'],
})
export class TabBarComponent {
  activeTab: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + 100; // Offset for better detection
    const sections = [
      'atGlance',
      'featureAndAmenities',
      'videoPlayer',
      'projectGallery',
      'locationMap',
      'relatedProjects',
      'contacting',
    ];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (
        element &&
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        this.activeTab = section;
        break;
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeTab = sectionId;
    }
  }
}
