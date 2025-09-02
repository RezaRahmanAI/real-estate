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

  constructor(private authService: AuthService, private router: Router) {}

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  closeProfileDropdown() {
    this.showProfileDropdown = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']); // redirect to home page
  }

  onWheel(event: WheelEvent): void {
    //console.log('Wheel event triggered:', event);
    // Manually trigger scroll to ensure wheel event works
    const element = this.mainContent.nativeElement;
    element.scrollTop += event.deltaY;
  }
}
