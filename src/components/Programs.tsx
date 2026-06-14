/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Clock, Check, Sparkles, ChevronRight } from 'lucide-react';
import { PROGRAMS } from '../data';
import { Program } from '../types';

interface ProgramsProps {
  onProgramInquire: (program: Program) => void;
}

export default function Programs({ onProgramInquire }: ProgramsProps) {
  return (
    <section id="programs" className="py-24 bg-zinc-950 relative overflow-hidden text-center">
      {/* Background ambient red circle */}
      <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
            TARGETED PROGRAMS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            6 PATHWAYS TO YOUR <br />
            <span className="text-rose-500">ULTIMATE FORM</span>
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 font-light text-sm sm:text-base">
            Select a specialized regimen designed around validated scientific principles, backed by expert coaching feedback loops.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {PROGRAMS.map((prog, index) => {
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden hover:border-rose-600/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 animate-fade"
              >
                {/* Image Wrap */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Tint gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
                  
                  {/* Floating labels */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-black uppercase font-mono tracking-widest bg-rose-600 text-white rounded-sm shadow-md">
                      {prog.intensity}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] font-black uppercase font-mono tracking-widest bg-zinc-950/80 backdrop-blur-md text-zinc-300 rounded-sm border border-white/5">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-rose-500" />
                        {prog.duration}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-rose-500 transition-colors leading-snug uppercase tracking-tight">
                      {prog.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mt-3 font-light leading-relaxed">
                      {prog.description}
                    </p>

                    <hr className="border-white/5 my-5" />

                    <h4 className="text-xs uppercase text-zinc-400 font-extrabold tracking-widest font-mono mb-3">
                      WHAT YOU RECEIVE:
                    </h4>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-rose-500 stroke-[3]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA trigger */}
                  <button
                    onClick={() => onProgramInquire(prog)}
                    className="w-full py-4 px-4 rounded-sm font-black text-center text-xs text-zinc-200 bg-zinc-950 border-2 border-white/10 hover:border-rose-600 hover:text-white uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-102"
                  >
                    <span>Request Details</span>
                    <ChevronRight className="w-4 h-4 text-rose-500" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
