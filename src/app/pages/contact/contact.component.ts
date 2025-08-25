import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactHeroComponent } from "./contact-hero/contact-hero.component";
import { ContactInfoMapComponent } from "./contact-info-map/contact-info-map.component";
import { ContactFromComponent } from "./contact-from/contact-from.component";
import { FadeInDirective } from '../../directives/fade-in.directive';
import { FaqComponent } from "./faq/faq.component";



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactHeroComponent, ContactInfoMapComponent, ContactFromComponent, FaqComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactComponent{
  
}
