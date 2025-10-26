// FIX: Add React import to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Project {
  title: string;
  duration: string;
  description: string[];
  details: string[]; // Added for modal view
  technologies: string[];
  link?: string;
  image?: string; // Optional image for modal
}

export interface Skill {
    name: string;
    icon: React.ReactNode;
    category: 'Software' | 'Cybersecurity';
}

export enum CertificationStatus {
  InProgress = 'In Progress',
  Planned = 'Planned',
  Completed = 'Completed',
}

export interface Certification {
  name: string;
  acronym: string;
  status: CertificationStatus;
  timeline: string;
  description:string;
  progress: number;
}
