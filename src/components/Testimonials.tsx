/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
      {/* Absolute visual ring glow */}
      <div className="absolute right-[15%] top-1/3 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center animate-fade">
        <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
          MEMBER RETENTION REVIEWS
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white mb-16">
          COMMUNITY FEEDBACK & <br />
          <span className="text-rose-500">UNBIASED RATINGS</span>
        </h2>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-3xl mx-auto bg-zinc-900 border-2 border-white/10 p-8 sm:p-12 rounded-sm backdrop-blur-md">
          <Quote className="w-16 h-16 text-rose-600/10 absolute top-6 left-8 pointer-events-none" />

          <div className="min-h-[160px] flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 5-Star presentation */}
                <div className="flex justify-center text-amber-400 gap-1">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Main Quote text */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-white font-serif leading-relaxed italic">
                  "{TESTIMONIALS[activeIndex].text}"
                </blockquote>

                {/* Profile detail */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-zinc-800 border border-white/5 flex items-center justify-center text-rose-500 font-bold text-sm uppercase">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="text-left font-sans">
                    <div className="font-extrabold text-white text-base leading-none uppercase tracking-tight">
                      {TESTIMONIALS[activeIndex].name}
                    </div>
                    <div className="text-xs text-rose-500 font-semibold font-mono tracking-wider mt-1 uppercase">
                      {TESTIMONIALS[activeIndex].role} • <span className="text-zinc-500 font-normal">{TESTIMONIALS[activeIndex].date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Controls */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/5 max-w-xs mx-auto">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-sm bg-zinc-950 border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff1e1e] transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Bullet indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-none transition-all cursor-pointer ${
                    activeIndex === index ? 'bg-rose-600 px-3' : 'bg-zinc-800'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-sm bg-zinc-950 border border-white/5 text-zinc-400 hover:text-white hover:border-[#ff1e1e] transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-level trust statement */}
        <p className="mt-8 text-xs font-mono text-zinc-500 uppercase tracking-widest leading-none">
          Ratings aggregated from genuine member submissions inside Ballia, UP
        </p>
      </div>
    </section>
  );
}
