// src/app/components/side-panel/side-panel.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelService } from '../../services/sidepanel.service';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent {
  constructor(public sidePanel: SidePanelService) {}
}
