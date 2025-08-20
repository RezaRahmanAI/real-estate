export interface Testimonial {
  id: string;
  name: string;
  description: string;
  image: string;
  contentType: 'Image' | 'Video' | '';
  content: string;
  order: number;
  isActive: boolean;
}
