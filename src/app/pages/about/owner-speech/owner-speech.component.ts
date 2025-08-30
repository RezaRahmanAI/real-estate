import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-owner-speech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner-speech.component.html',
  styleUrls: ['./owner-speech.component.css'],
  
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
