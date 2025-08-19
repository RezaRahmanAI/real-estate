import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { HttpClient } from '@angular/common/http'; // Commented out
// import { environment } from '../../environments/environment'; // Commented out
// import { Fancybox } from '@fancyapps/ui'; // Commented out
// import '@fancyapps/ui/dist/fancybox/fancybox.css'; // Commented out

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GalleryComponent implements OnInit {
  // baseUrl = environment.apiBaseUrl; // Commented out
  baseUrl = 'https://dummy.com'; // Dummy base URL for image/video paths

  state = {
    gallery: [
      {
        contentName: 'dummy-image-1.jpg',
        contentType: 'Image',
      },
      {
        contentName: 'dummy-video-1.mp4',
        contentType: 'Video',
      },
      {
        contentName: 'dummy-image-2.jpg',
        contentType: 'Image',
      },
    ],
  };

  ngOnInit(): void {
    // Commenting out Fancybox and API calls
    // this.initializeFancybox();
    // this.getGallery();
  }

  // constructor(private http: HttpClient) {} // Commented out
  constructor() {}

  // Commenting out API and Fancybox methods
  /*
  initializeFancybox(): void {
    import('@fancyapps/ui').then(({ Fancybox }) => {
      import('@fancyapps/ui/dist/fancybox/fancybox.css');
      Fancybox.bind('[data-fancybox]', {});
    });
  }

  getGallery(): void {
    this.http.get<any>(`${this.baseUrl}/api/website/getgallery`, { method: 'GET' }).subscribe({
      next: (data) => {
        this.state.gallery = data;
      },
      error: (err) => console.error('Error fetching gallery:', err),
    });
  }
  */
}
