/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Dumbbell, Award, Flame } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data';

export default function About() {
  const bulletPoints = [
    {
      title: "State-of-the-Art Power Section",
      text: "Power cages, premium deadlift platforms, and robust plate-loaded machines."
    },
    {
      title: "Step-by-Step Beginner Onboarding",
      text: "Personal attention for beginners to learn movements safely without injuries."
    },
    {
      title: "Tailored Weight Loss and Muscle Splits",
      text: "Programs matched strictly to individual metabolism and physical metrics."
    },
    {
      title: "Vibrant and Hygienic Atmosphere",
      text: "Perfect lighting, daily sanitization, and motivating rhythm to lift heavy."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Dynamic Image Montage with badges */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main premium image */}
              <div className="rounded-sm overflow-hidden border-2 border-white/10 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
                  alt="Strength training area"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Suspended Badge (Est 2018 in Ballia) */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-rose-600 text-white p-5 rounded-sm shadow-[0_10px_30px_rgba(225,29,72,0.3)] border-2 border-white/10 max-w-[200px]">
                <p className="text-3xl font-black tracking-tight leading-none uppercase italic">Est.</p>
                <p className="text-4xl font-extrabold tracking-widest text-white leading-none mt-1">2018</p>
                <hr className="border-white/10 my-2" />
                <p className="text-xs font-bold uppercase tracking-wider text-rose-100">Most Trusted Gym in Ballia</p>
              </div>

              {/* Floating review count widget */}
              <div className="absolute top-6 left-6 bg-zinc-900/95 border border-white/10 backdrop-blur-md px-4 py-3 rounded-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#ff1e1e]/20 flex items-center justify-center text-rose-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-black text-sm">4.4★ Rated</div>
                  <div className="text-zinc-400 text-[10px] font-mono leading-none">165+ G-Maps Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copywriting Content */}
          <div className="w-full lg:w-1/2 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
              ABOUT OUR CENTER
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white mb-6">
              YOUR LOCAL PATHWAY TO <br />
              <span className="text-rose-500">UNCOMPROMISING STRENGTH</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg mb-6 leading-relaxed font-light">
              Health & Fitness Gym has been helping the people of Ballia achieve their fitness goals with expert guidance, modern workout equipment, and a motivating environment. Whether you're a beginner walking into a gym for the first time or an experienced athlete preparation for heavy lifts, our coaches help you reach your full potential.
            </p>

            <div className="space-y-4 mb-8">
              {bulletPoints.map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-rose-950 border border-rose-800/40 flex items-center justify-center text-rose-500 mt-1 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base leading-none mb-1">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Call-out for conversion */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-lg bg-zinc-850 flex items-center justify-center text-rose-500 shrink-0 border border-zinc-800">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">LOCATION CHECK</div>
                  <div className="text-white text-xs font-semibold leading-tight mt-0.5">Japlin Ganj, Near Durga Ji Mandir</div>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-zinc-800" />
              <p className="text-[11px] sm:text-xs text-zinc-400 max-w-xs leading-snug">
                Step by and witness our premium workout space. Over 165+ reviews confirm our commitment to your results!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
