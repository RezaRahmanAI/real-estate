import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Offer, Slide, Testimonial } from '../models/model';

// Define or import Project interface
export interface Project {
  id: string;
  name: string;
  category: string;
  type: string;
  image: string;
}


@Injectable()
export class DataService {
  private apiUrl = 'api/data'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: '1',
        name: 'Project One',
        category: 'Residential',
        type: 'Ongoing',
        image: 'assets/images/banner-3.png',
      },
      {
        id: '2',
        name: 'Project Two',
        category: 'Commercial',
        type: 'Upcoming',
        image: 'assets/images/banner_1.jpg',
      },
      {
        id: '3',
        name: 'Project Three',
        category: 'Residential',
        type: 'Completed',
        image: 'assets/images/banner-3.png',
      },
    ];
    return of(projects);
  }

  getTestimonials(): Observable<Testimonial[]> {
    const testimonials: Testimonial[] = [
      {
        name: 'John Doe',
        description: 'Amazing experience with Sanmar Properties!',
        image: 'images/banner-3.png',
      },
      {
        name: 'Jane Smith',
        description: 'Top-notch quality and service.',
        image: 'images/banner_1.jpg',
      },
    ];
    return of(testimonials);
  }

  getOffer(): Observable<Offer> {
    const offer: Offer = {
      picture: 'images/banner-3.png',
    };
    return of(offer);
  }
}
