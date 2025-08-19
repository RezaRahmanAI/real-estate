import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FadeInDirective } from '../../../directives/fade-in.directive';

@Component({
  selector: 'app-owner-speech',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './owner-speech.component.html',
  styleUrls: ['./owner-speech.component.css'],
  animations: [
    trigger('imageAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.9)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', [animate('0.6s ease-out')]),
    ]),
    trigger('headingAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [animate('0.6s 0.3s ease-out')]),
    ]),
    trigger('textAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [animate('0.6s 0.5s ease-out')]),
    ]),
  ],
})
export class OwnerSpeechComponent  {
  @Input() ownerName?: string;
  @Input() ownerDesignation?: string;
  @Input() ownerSpeech?: string;
  @Input() ownerImage?: string;
  @Output() imageError = new EventEmitter<Event>();


  onImageError(event: Event) {
    this.imageError.emit(event);
  }
}
