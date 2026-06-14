/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Award, Flame, TrendingDown, Clipboard, Heart, Users, Smile, ShieldCheck } from 'lucide-react';
import { FEATURES } from '../data';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell: Dumbbell,
  Award: Award,
  ShieldAlert: ShieldCheck, // Using ShieldCheck for Strength Training
  TrendingDown: TrendingDown,
  Flame: Flame,
  Heart: Heart,
  Users: Users,
  Smile: Smile,
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
            ELITE AMENITIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            EVERYTHING YOU NEED TO <br />
            <span className="text-rose-500">EXCEL & DOMINATE</span>
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 font-light text-sm sm:text-base">
            Health & Fitness Gym offers high-performance facilities to make sure you get the absolute best returns on your daily efforts.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, index) => {
            const IconComponent = iconMap[feat.icon] || Dumbbell;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-[#0a0a0a] hover:bg-zinc-900 border border-white/5 hover:border-rose-600/30 rounded-sm p-6 transition-all duration-300 flex flex-col items-start shadow-xl overflow-hidden"
              >
                {/* Visual Accent Glow on Hover */}
                <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-rose-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 h-1 w-0 bg-rose-600 group-hover:w-full transition-all duration-500" />

                {/* Styled Icon */}
                <div className="p-3.5 rounded-sm bg-zinc-950 border border-white/5 text-rose-500 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-5">
                  <IconComponent className="w-6 h-6 transform transition-transform group-hover:rotate-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-none group-hover:text-rose-500 transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
                  {feat.description}
                </p>

                {/* Standard sub-badge for realism */}
                <div className="mt-auto flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">
                  <span>UNRESTRICTED</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-750" />
                  <span className="text-rose-500">INCLUDED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
