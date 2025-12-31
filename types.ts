import React from 'react';

export type Language = 'fr' | 'en';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ElementType;
}

export interface Client {
  name: string;
  logo: string; // Using text or placeholder for now
}

export interface Testimonial {
  author: string;
  role: string;
  text: string;
}

export type ViewState = 'home' | 'services' | 'portfolio' | 'about' | 'contact';