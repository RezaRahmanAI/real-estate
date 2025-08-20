export interface Testimonial {
  name: string;
  description: string;
  image?: string;
}

export interface LandownerData {
  name: string;
  phone: string;
  email: string;
  locality: string;
  landCategory: string;
  frontRoadWidth?: string;
  facing?: string;
  address: string;
  message: string;
}

export interface Slide {
  image: string;
  alt: string;
  author: string;
  title: string;
  topic: string;
  description: string;
  thumbnailTitle: string;
  thumbnailDescription: string;
}

export interface Offer {
  picture: string;
}

export interface Team {
  id: string;
  name: string;
  designation: string;
  description: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  image: string;
  isActive: boolean;
  order: number;
}


export interface AboutUs {
  id: string;
  history: string;
  vision: string;
  visionImage: string;
  mission: string;
  missionImage: string;
  ownerName: string;
  ownerDesignation: string;
  ownerSpeech: string;
  ownerImage: string;
}

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}
