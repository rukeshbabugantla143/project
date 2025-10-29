
import React from 'react';

export interface Service {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export enum ShiftingType {
  HOME = 'Home',
  OFFICE = 'Office',
  VEHICLE = 'Vehicle'
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  shiftingType: ShiftingType;
  shiftingDate: string;
  message: string;
}
