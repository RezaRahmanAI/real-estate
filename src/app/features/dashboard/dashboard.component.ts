import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @ViewChild('mainContent') mainContent!: ElementRef;
  showProfileDropdown = false;
  showSidebar = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  closeProfileDropdown() {
    this.showProfileDropdown = false;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  closeSidebar(event?: MouseEvent) {
    if (event) {
      const target = event.target as HTMLElement;
      if (target.closest('aside') || target.closest('.fa-bars')) {
        return;
      }
    }
    this.showSidebar = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onWheel(event: WheelEvent): void {
    const element = this.mainContent.nativeElement;
    element.scrollTop += event.deltaY;
  }
}
