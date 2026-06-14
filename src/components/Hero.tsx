/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, Star, Calendar, Users, Dumbbell } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Hero({ onJoinClick, onTrialClick }: HeroProps) {
  // We'll use a stunning dark overlay with electric red accents over a premium muscle training image
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-zinc-950 overflow-hidden pt-24">
      {/* Background Image with precise overlay gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
          alt="Health and Fitness Gym Ballia Interior"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent" />
        
        {/* Subtle glow nodes */}
        <div className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] bg-rose-700/8 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Headline Section */}
        <div className="w-full lg:w-[58%] text-left">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-6"
          >
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xs font-bold text-white">4.4★ 165+ Google Reviews</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span className="text-xs text-zinc-400 font-medium font-mono">Ballia's Purest Gym</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.85] tracking-tighter uppercase italic text-white flex flex-col gap-1 sm:gap-2"
          >
            <span className="block">Transform</span>
            <span className="text-rose-500 block">Your Body.</span>
            <span className="block text-white">Transform Life.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed font-sans"
          >
            {BUSINESS_DETAILS.name} is Ballia's trusted fitness destination with modern equipment, expert trainers, and proven results. Take control of your strength today.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 justify-start"
          >
            <button
              onClick={onJoinClick}
              className="px-10 py-5 bg-rose-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] duration-200 cursor-pointer"
            >
              Join Membership Now
            </button>
            <button
              onClick={onTrialClick}
              className="px-8 py-5 border border-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Book Free Trial</span>
              <Play className="w-4 h-4 text-rose-500 fill-current group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-10 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div className="border-l-2 border-rose-500 pl-4">
              <div className="text-2xl sm:text-3xl font-black text-rose-500">165+</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">Real Reviews</div>
            </div>
            <div className="border-l-2 border-rose-500 pl-4">
              <div className="text-2xl sm:text-3xl font-black text-white">4.4★</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">User Rating</div>
            </div>
            <div className="border-l-2 border-rose-500 pl-4">
              <div className="text-2xl sm:text-3xl font-black text-white">5:00 AM</div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">Opens Daily</div>
            </div>
          </motion.div>
        </div>

        {/* Right Graphic Section - Modern glassmorphic status card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[38%] flex justify-center"
        >
          <div className="relative group max-w-md w-full">
            {/* Ambient outer glow halo */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 opacity-25 blur-lg group-hover:opacity-40 transition-opacity" />
            
            {/* The main high-converting card */}
            <div className="relative bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-zinc-800/60 pb-4 mb-4">
                <span className="text-xs tracking-widest uppercase text-rose-500 font-bold font-mono">Live Workout Hub</span>
                <span className="px-2.5 py-1 rounded bg-rose-950/50 text-rose-400 text-[10px] font-extrabold border border-rose-900/40">VIP STAGE</span>
              </div>

              <div className="space-y-4">
                {/* Visual indicator lines */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-600/10 text-rose-500 mt-0.5">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Professional Equipment</h4>
                    <p className="text-zinc-400 text-xs mt-0.5">Designed for muscle building, toning, and weight lifting safety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-600/10 text-rose-500 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Expert Gym Instructors</h4>
                    <p className="text-zinc-400 text-xs mt-0.5">Step-by-step guidance on chest splits, squats, and proper dumbbell forms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-600/10 text-rose-500 mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Weekly Assessment</h4>
                    <p className="text-zinc-400 text-xs mt-0.5">Track machine volumes, bodyweight, and chest-to-waist ratios.</p>
                  </div>
                </div>
              </div>

              {/* Motivational banner inside card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-zinc-950 to-neutral-900 border border-zinc-800 text-center">
                <p className="text-xs text-zinc-400 italic">"The harder you work in the gym, the easier it gets in life."</p>
                <div className="text-[10px] text-rose-500 uppercase tracking-widest font-black mt-2">Join Ballia's Fitness Family</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
