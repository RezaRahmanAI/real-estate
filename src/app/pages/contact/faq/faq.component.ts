import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          overflow: 'visible',
        })
      ),
      state(
        'closed',
        style({
          height: '0',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      transition('closed <=> open', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class FaqComponent {
  faqs = [
    {
      question: 'What types of properties do you offer?',
      answer:
        'We offer a range of residential and commercial properties, including apartments, houses, and office spaces in prime locations across Rajshahi and beyond.',
      isOpen: false,
    },
    {
      question: 'How can I schedule a property viewing?',
      answer:
        'You can schedule a viewing by filling out the contact form on our website or calling our sales team at 01329-638961. We’ll arrange a convenient time for you.',
      isOpen: false,
    },
    {
      question: 'What is the process for purchasing a property?',
      answer:
        'Our team will guide you through every step, from selecting a property to finalizing the paperwork. Contact us to start with a consultation.',
      isOpen: false,
    },
    {
      question: 'Do you offer financing options?',
      answer:
        'We partner with trusted financial institutions to provide flexible financing options. Reach out to discuss your needs with our team.',
      isOpen: false,
    },
    {
      question: 'How quickly will I hear back after submitting a contact form?',
      answer:
        'Our team responds within 2 business hours to all inquiries submitted through our contact form.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
