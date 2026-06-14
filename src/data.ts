/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Feature, WhyChooseUsItem, GalleryItem, Testimonial, MembershipPlan, TransformationStory } from './types';

export const BUSINESS_DETAILS = {
  name: "Health & Fitness Gym",
  location: "Durga Ji Mandir, Japlin Ganj, Bahadurpur, Ballia, Uttar Pradesh 277001",
  shortLocation: "Japlin Ganj, Ballia",
  contact: "+91 98075 36188",
  rating: "4.4",
  reviewsCount: "165+",
  established: "2018",
  hours: "Monday to Sunday, 5:00 AM onwards",
  hoursDetail: {
    weekdays: "5:00 AM - 10:00 PM",
    sunday: "5:00 AM - 12:00 PM"
  }
};

export const FEATURES: Feature[] = [
  {
    id: "modern-equipment",
    title: "Modern Workout Equipment",
    description: "Imported premium strength equipment, multi-station cables, power racks, and dumbbells up to 50kg.",
    icon: "Dumbbell"
  },
  {
    id: "certified-trainers",
    title: "Certified Trainers",
    description: "Highly experienced local coaches who understand individual body structures and goals.",
    icon: "Award"
  },
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Dedicated powerlifting and strength area designed to help you increase absolute power and mass.",
    icon: "ShieldAlert"
  },
  {
    id: "weight-loss",
    title: "Weight Loss Programs",
    description: "Tailored metabolic conditioning, high-intensity workouts, and active nutritional counseling.",
    icon: "TrendingDown"
  },
  {
    id: "muscle-building",
    title: "Muscle Building Programs",
    description: "Hypertrophy-focused training splits, scientific progression, and dedicated recovery support.",
    icon: "Flame"
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    description: "Full suite of modern treadmills, cross-trainers, and spin bikes to boost your stamina and heart health.",
    icon: "Heart"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one accountability, precise posture correction, and accelerated fitness tracking.",
    icon: "Users"
  },
  {
    id: "friendly-env",
    title: "Friendly Environment",
    description: "A highly motivating, safe, and respectful space welcoming all age groups and fitness levels.",
    icon: "Smile"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "reviews",
    title: "165+ Positive Reviews",
    description: "Ballia's top-rated fitness center on Google Maps, backed by local trust and proven customer satisfaction."
  },
  {
    id: "trainers",
    title: "Experienced Trainers",
    description: "Friendly coaching team focused on correct posture, heavy lift spotting, and scientific nutrition."
  },
  {
    id: "beginner-friendly",
    title: "Beginner-Friendly Coaching",
    description: "Never feel lost. We onboard beginners step-by-step with targeted form correction and split-routine design."
  },
  {
    id: "modern-machines",
    title: "Modern Machines",
    description: "Equipped with state-of-the-art bio-mechanical equipment that minimizes joint stress and maximizes progress."
  },
  {
    id: "cleanliness",
    title: "Clean & Hygienic Facility",
    description: "Regular sanitization, clean locker rooms, fresh drinking water, and fully air-conditioned spaces."
  },
  {
    id: "affordable-plans",
    title: "Affordable Membership Plans",
    description: "Premium fitness infrastructure priced transparently with no hidden fees, suitable for everyone in Ballia."
  },
  {
    id: "proven-results",
    title: "Proven Fitness Results",
    description: "Hundreds of active transformations in weight loss, strength improvement, and overall physical wellness."
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "prog-weight-loss",
    title: "Weight Loss Transformation",
    description: "A comprehensive fat reduction and metabolism-boosting program combining aerobic activities, metabolic weights, and calorie tracking.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    duration: "12 Weeks",
    intensity: "Intermediate",
    features: ["Custom Calorie Limits", "HIIT & Cardio Circuits", "Weekly Body Fat Analysis", "Progressive Conditioning"]
  },
  {
    id: "prog-muscle-gain",
    title: "Muscle Gain Program",
    description: "Increase dry muscle hypertrophy through progressive overload, compound lifts, and hyper-protein diet charts tailored for your size.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
    duration: "16 Weeks",
    intensity: "Advanced",
    features: ["Hypertrophy Splits", "Compound Strength Check", "Protein Load Guidance", "Mass Building Logs"]
  },
  {
    id: "prog-strength",
    title: "Strength Training",
    description: "Unlock core athletic potential. Perfect your Squat, Bench Press, and Deadlift form with pure power focus.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    duration: "8 Weeks",
    intensity: "All Levels",
    features: ["Form Mechanics Analysis", "Powerlifting Protocols", "CNS Recovery Schedules", "Max Lift Safety Training"]
  },
  {
    id: "prog-cardio",
    title: "Cardio Fitness",
    description: "Enhance stamina, expand lung capacity, and improve cardiovascular health. Train on treadmills, spin bikes, and battle ropes.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    duration: "Ongoing",
    intensity: "Beginner",
    features: ["Heart Rate Zones Tracking", "Core Stabilization", "Stamina Building Blocks", "Aerobic Conditioning"]
  },
  {
    id: "prog-personal-train",
    title: "Personal Training",
    description: "An elite program with 1-on-1 focus. Your private coach designs everything around your injury history, schedule, and goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    duration: "Custom",
    intensity: "All Levels",
    features: ["1-on-1 Private Sessions", "Exclusive Gym App Tracker", "Flexible Hourly Booking", "Posture Correction Specialist"]
  },
  {
    id: "prog-functional",
    title: "Functional Training",
    description: "Incorporate bodyweight exercises, plyometrics, kettlebell flows, and medicine ball complexes for dynamic everyday power.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop",
    duration: "10 Weeks",
    intensity: "Intermediate",
    features: ["Agility Ladder Drills", "Kettlebell Workflows", "Joint Mobility Improvement", "Multi-Planar Fitness"]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Strength Equipment Floor",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "Dumbbell Rack and Bench Press Stations",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1623874514711-4f37f3702411?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Morning Strength Class",
    category: "workout",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "1-on-1 Personal Coaching Session",
    category: "workout",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "Locker Area & Reception",
    category: "interior",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Vibrant Workout Atmosphere",
    category: "interior",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-7",
    title: "Vipin's 20kg Fat Loss Achievement",
    category: "transformations",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=805&auto=format&fit=crop"
  },
  {
    id: "gal-8",
    title: "Ankit's Lean Hypertrophy Success",
    category: "transformations",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=805&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aman Singh",
    role: "Local Businessman",
    text: "The trainers are extremely supportive and guide beginners very well.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: "test-2",
    name: "Rahul Verma",
    role: "Powerlifter Athlete",
    text: "Best gym in Ballia with quality equipment and a motivating atmosphere.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: "test-3",
    name: "Shyam Sundar Pathak",
    role: "Government Employee",
    text: "Professional trainers and excellent workout environment.",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: "test-4",
    name: "Pooja Pandey",
    role: "College Student",
    text: "Very safe and welcoming atmosphere for female fitness enthusiasts. Clean facility, highly disciplined coaches.",
    rating: 4,
    date: "2 months ago"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-basic",
    name: "Basic Plan",
    price: "₹800",
    period: "Monthly",
    popular: false,
    features: [
      "Standard Gym Access",
      "Full Cardio Zone Access",
      "Locker & Shower Access",
      "Time Slots: 5:00 AM - 10:00 AM & 4:00 PM - 9:00 PM",
      "Standard Maintenance Included"
    ],
    gradientText: "from-zinc-400 to-zinc-600"
  },
  {
    id: "plan-standard",
    name: "Standard Plan",
    price: "₹1,200",
    period: "Monthly",
    popular: true,
    features: [
      "Full 24/7 Floor Gym Access",
      "Unlimited Cardio & Spin Access",
      "Certified Trainer General Support",
      "Complete Fitness Guidance Checklist",
      "Personalized Split routine design",
      "Flexible Timing Slots"
    ],
    gradientText: "from-rose-500 to-red-600"
  },
  {
    id: "plan-premium",
    name: "Premium Plan",
    price: "₹2,500",
    period: "Monthly",
    popular: false,
    features: [
      "All Features of Standard Plan",
      "Personal Training (1-on-1 Sessions)",
      "Customized Hardcore Workout Plan",
      "Diet & Nutrition Weekly Counsel",
      "Supplement Safety Advisory",
      "Body Fat Composition Track (Bi-Weekly)"
    ],
    gradientText: "from-amber-400 to-orange-500"
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: "trans-1",
    name: "Vipin Yadav",
    achievement: "Fat Loss & Metabolic Reset",
    beforeWeight: "94 kg",
    afterWeight: "74 kg",
    duration: "5 Months",
    stat: "-20 kg",
    statLabel: "Fat Melted",
    beforeImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop", // Stylized placeholder
    afterImage: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=400&auto=format&fit=crop", // Transform photorealistic
    quote: "The personalized weight loss program at Health & Fitness Gym changed my lifestyle completely. The cardio zone is world-class!"
  },
  {
    id: "trans-2",
    name: "Ankit Mishra",
    achievement: "Lean Muscle Hypertrophy",
    beforeWeight: "62 kg",
    afterWeight: "75 kg",
    duration: "6 Months",
    stat: "+13 kg",
    statLabel: "Lean Mass Gained",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
    quote: "With the guidance of certified trainers and consistent high-quality equipment, I was finally able to build real strength and muscular confidence."
  }
];
