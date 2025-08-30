import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactHeroComponent } from "./contact-hero/contact-hero.component";
import { ContactInfoMapComponent } from "./contact-info-map/contact-info-map.component";
import { ContactFromComponent } from "./contact-from/contact-from.component";
import { FaqComponent } from "./faq/faq.component";
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";
import { AnimationService } from '../../services/animation.service';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactHeroComponent,
    ContactInfoMapComponent,
    FaqComponent,
    GetInTouchComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactComponent implements AfterViewInit {
  constructor(private anim: AnimationService) {}
  
    ngAfterViewInit() {
      this.anim.animateOnScroll('.fade-up');
      this.anim.animateOnScroll('.zoom-in');
    }
}
