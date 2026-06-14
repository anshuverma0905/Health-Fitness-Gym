/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, Trophy, ShieldCheck, Flame } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_DETAILS } from '../data';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-neutral-900 border-t border-zinc-900 overflow-hidden relative">
      {/* Background flare nodes */}
      <div className="absolute left-[15%] top-1/3 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Block: Narrative, Bullet lists, and badging */}
          <div className="w-full lg:w-1/2">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
              BALLIA'S CHOSEN GYM
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white mb-6">
              SETUP TO DELIVER <br />
              <span className="text-rose-500">UNMATCHABLE RESULTS</span>
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg mb-8 leading-relaxed font-light">
              We stand apart from standard fitness workspaces by offering customized coaching systems, maintaining deep hygiene parameters, and curating an encouraging, zero-ego workout atmosphere.
            </p>

            <div className="space-y-4">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4 p-4 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-rose-600/20 hover:bg-zinc-900/40 transition-all duration-300 group animate-fade"
                >
                  <div className="w-6 h-6 rounded-sm bg-rose-950 border border-white/5 flex items-center justify-center text-rose-500 mt-1 shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all">
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base leading-none mb-1 group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Block: A glorious high-converting stats call-out box */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Glow box */}
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-rose-600 to-amber-500 opacity-20 blur-xl" />

              <div className="relative rounded-sm border-2 border-white/10 bg-zinc-900 p-8 sm:p-10 text-center">
                <div className="w-16 h-16 rounded-sm bg-rose-600/10 border border-white/15 text-rose-500 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8" />
                </div>

                <div className="flex justify-center items-center gap-1 text-amber-400 mb-2">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                </div>

                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">GOOGLE MAPS TRUST LEVEL</p>
                
                <h3 className="text-5xl sm:text-6xl font-black text-white mt-3 leading-none tracking-tight">4.4 / 5.0</h3>
                <p className="text-rose-500 font-extrabold text-lg mt-1 tracking-wider uppercase font-mono">165+ VERIFIED LOCAL REVIEWS</p>

                <p className="text-zinc-400 text-sm mt-6 leading-relaxed max-w-md mx-auto font-light">
                  "Health & Fitness Gym is renowned in Ballia for delivering actual results, maintaining highly supportive coaching standards, and purchasing top-tier biomechanical equipment for our community."
                </p>

                {/* Micro credentials checklist */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800 max-w-sm mx-auto text-left">
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>CERTIFIED INSTRUCTORS</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>DAILY DISINFECTED</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>CENTRAL A.C. FLOOR</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>FREE VEHICLE PARKING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
