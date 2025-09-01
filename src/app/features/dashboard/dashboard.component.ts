import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @ViewChild('mainContent') mainContent!: ElementRef;

  onWheel(event: WheelEvent): void {
    //console.log('Wheel event triggered:', event);
    // Manually trigger scroll to ensure wheel event works
    const element = this.mainContent.nativeElement;
    element.scrollTop += event.deltaY;
  }
}
