/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Dumbbell, MapPin, Phone, Clock, ArrowUp, Instagram, Facebook, MessageSquare, Shield } from 'lucide-react';
import { BUSINESS_DETAILS, PROGRAMS } from '../data';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Gym Features', href: '#features' },
    { name: 'Training Plans', href: '#programs' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Pricing Tiers', href: '#pricing' },
    { name: 'BMI Calculator', href: '#bmi' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const seoKeywords = [
    "Best Gym in Ballia",
    "Fitness Center Ballia",
    "Health & Fitness Gym",
    "Gym Near Me",
    "Weight Loss Gym Ballia",
    "Personal Trainer Ballia"
  ];

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      {/* Background visual overlay */}
      <div className="absolute left-1/3 bottom-0 w-[400px] h-[300px] bg-red-950/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-zinc-900 text-left">
          
          {/* Logo and branding description: 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#"
              onClick={handleScrollTop}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform">
                <Dumbbell className="w-6 h-6 text-white transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg leading-none text-white tracking-wider uppercase">
                  HEALTH & FITNESS
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-rose-500 font-bold leading-none mt-1">
                  GYM BALLIA
                </span>
              </div>
            </a>

            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Serving the fitness community of Japlin Ganj and surrounding Bahadurpur areas since 2018. Under certified coaching mentorship and high-biomechanics strength gear, we help you shape absolute confidence.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-mono mr-1">FOLLOW US:</span>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-all"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-rose-600 hover:border-rose-500 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* WhatsApp direct route */}
              <a 
                href={`https://wa.me/${BUSINESS_DETAILS.contact.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all"
                aria-label="WhatsApp Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links column: 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-sans">Quick Links</h4>
            <ul className="space-y-2 text-sm text-zinc-450 text-zinc-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-rose-600 scale-0 group-hover:scale-100 transition-transform shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Programs Column: 3 columns */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-sans">Our Programs</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <a href="#programs" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-rose-600 scale-0 group-hover:scale-100 transition-transform shrink-0" />
                    <span>{prog.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address Column: 3 columns */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-sans">Contact US</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-light">
                  {BUSINESS_DETAILS.location}
                </p>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.contact.replace(/\s+/g, '')}`} className="hover:text-white text-base font-extrabold text-white transition-colors">
                  {BUSINESS_DETAILS.contact}
                </a>
              </div>

              <div className="flex gap-2.5 items-start">
                <Clock className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-light">{BUSINESS_DETAILS.hours}</p>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5 mt-1">Weekdays & Sundays active</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SEO local Tag Cloud */}
        <div className="py-8 border-b border-zinc-900 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-extrabold uppercase font-mono tracking-widest mr-2">LOCAL SEARCH METRICS:</span>
            {seoKeywords.map((keyword, index) => (
              <span 
                key={index} 
                className="px-2.5 py-1 text-[10px] bg-zinc-900 border border-zinc-850 text-zinc-400 rounded-md font-mono"
              >
                #{keyword.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
          <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-rose-500" />
            <span>Secure Premium Gym Showcase</span>
            <span className="text-zinc-800">|</span>
            <a 
              href="#" 
              onClick={handleScrollTop}
              className="hover:text-white flex items-center gap-1 transition-colors group font-bold font-mono"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
