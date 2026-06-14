/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  features: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'workout' | 'equipment' | 'interior' | 'transformations';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  gradientText: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  achievement: string;
  beforeWeight: string;
  afterWeight: string;
  duration: string;
  stat: string;
  statLabel: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}
