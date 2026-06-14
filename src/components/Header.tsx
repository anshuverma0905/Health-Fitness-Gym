/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Dumbbell, Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_DETAILS } from '../data';

interface HeaderProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Header({ onJoinClick, onTrialClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate if open (Open 5:00 AM onwards. Let's assume 5 AM to 10 PM)
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // Open from 5 AM (5) to 10 PM (22)
      setIsOpenNow(hours >= 5 && hours < 22);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'BMI Tool', href: '#bmi' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro bar for direct conversion focus */}
      <div className="bg-neutral-950 border-b border-zinc-800/40 py-2 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden sm:inline">{BUSINESS_DETAILS.location}</span>
              <span className="inline sm:hidden">{BUSINESS_DETAILS.shortLocation}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>{BUSINESS_DETAILS.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Live Indicator */}
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></span>
              <span className={isOpenNow ? 'text-emerald-400 font-medium' : 'text-zinc-500 font-medium'}>
                {isOpenNow ? 'OPEN NOW' : 'CLOSED - OPENS 5 AM'}
              </span>
            </div>
            <a 
              href={`tel:${BUSINESS_DETAILS.contact.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium transition-colors"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_DETAILS.contact}
            </a>
          </div>
        </div>
      </div>

      {/* Main glassmorphism navigation */}
      <header
        className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Brand/Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-sm bg-rose-600 flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-none text-white tracking-tight uppercase group-hover:text-rose-500 transition-colors">
                HEALTH & FITNESS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-rose-500 font-extrabold leading-none mt-1">
                GYM BALLIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-black font-mono uppercase tracking-widest text-zinc-350 text-zinc-300 hover:text-white transition-colors relative group py-1.5"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onTrialClick}
              className="px-4 py-2.5 text-xs font-black uppercase tracking-wider text-zinc-300 hover:text-white transition-all bg-zinc-900 border border-white/5 rounded-sm hover:bg-zinc-800 cursor-pointer"
            >
              Free Trial
            </button>
            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-[#ff1e1e] rounded-sm hover:bg-rose-700 transition-all shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:scale-[1.03] active:translate-y-0 cursor-pointer"
            >
              Join Gym
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-zinc-950 border-t border-zinc-800/80 absolute top-full left-0 right-0 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider font-mono text-zinc-300 hover:text-white rounded-sm hover:bg-zinc-900/60 transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <hr className="border-zinc-800/80 my-1" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onTrialClick();
                    }}
                    className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Free Trial
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onJoinClick();
                    }}
                    className="w-full text-center py-3 text-xs font-black uppercase tracking-wider text-white bg-[#ff1e1e] rounded-sm hover:bg-rose-700 transition-colors shadow-lg cursor-pointer"
                  >
                    Join Gym
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
