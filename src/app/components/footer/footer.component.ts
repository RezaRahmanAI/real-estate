import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent  {
  
}
