import { Component } from '@angular/core';
import { TeamsIndexComponent } from "./teams-index/teams-index.component";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [TeamsIndexComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

}
