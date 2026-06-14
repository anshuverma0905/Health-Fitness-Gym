/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Quote, ArrowRight, TrendingUp, Dumbbell } from 'lucide-react';
import { TRANSFORMATION_STORIES } from '../data';

export default function Transformations() {
  // Let's add an interactive state where they can choose to view "Before" or "After" images on a tab split, or an interactive slider. A beautiful image toggle/slider is perfect.
  const [activeViews, setActiveViews] = useState<Record<string, 'before' | 'after'>>({
    'trans-1': 'after',
    'trans-2': 'after'
  });

  const toggleView = (storyId: string, view: 'before' | 'after') => {
    setActiveViews(prev => ({
      ...prev,
      [storyId]: view
    }));
  };

  return (
    <section id="transformations" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-[25%] w-[350px] h-[350px] bg-red-650/5 bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
            VERIFIED SUCCESS STORIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            PROVEN RESULTS FROM <br />
            <span className="text-rose-500">OUR GYM FLOOR</span>
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 font-light text-sm sm:text-base">
            No stock imagery. See the actual before-and-after results accomplished by Ballia residents training with our certified routines.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {TRANSFORMATION_STORIES.map((story) => {
            const currentView = activeViews[story.id] || 'after';
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="bg-[#0a0a0a] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row gap-8 shadow-2xl hover:border-zinc-700/65 transition-all text-left animate-fade"
              >
                {/* Left Side: Interactive Compare Slide Preview */}
                <div className="w-full md:w-[45%] flex flex-col shrink-0">
                  <div className="relative h-72 sm:h-80 rounded-sm overflow-hidden border border-white/5 bg-zinc-950">
                    <img
                      src={currentView === 'before' ? story.beforeImage : story.afterImage}
                      alt={`${story.name} transform state`}
                      className="w-full h-full object-cover object-center transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Screen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/10 to-transparent pointer-events-none" />

                    {/* Floating Level state widget */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-zinc-900 border border-white/5 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-bold">STATE VIEW</span>
                      <span className={`text-xs font-black uppercase tracking-wider font-mono ${currentView === 'after' ? 'text-[#ff1e1e]' : 'text-zinc-300'}`}>
                        {currentView === 'after' ? 'AFTER PROGRAM' : 'BEFORE PROGRAM'}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Controls tab */}
                  <div className="grid grid-cols-2 gap-2 mt-3.5">
                    <button
                      onClick={() => toggleView(story.id, 'before')}
                      className={`py-2 text-[10px] font-black uppercase tracking-widest font-mono rounded-sm border transition-all cursor-pointer ${
                        currentView === 'before'
                          ? 'bg-zinc-800 border-zinc-700 text-white'
                          : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      Before State
                    </button>
                    <button
                      onClick={() => toggleView(story.id, 'after')}
                      className={`py-2 text-[10px] font-black uppercase tracking-widest font-mono rounded-sm border transition-all cursor-pointer ${
                        currentView === 'after'
                          ? 'bg-[#ff1e1e] border-[#ff1e1e] text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      After Transform
                    </button>
                  </div>
                </div>

                {/* Right Side: Copywriting and member feedback quote */}
                <div className="flex-grow flex flex-col justify-between text-left">
                  <div>
                    {/* Header metrics */}
                    <div className="flex justify-between items-start gap-4 text-left">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-none uppercase tracking-tight italic font-serif">
                          {story.name}
                        </h3>
                        <p className="text-[11px] text-rose-500 font-bold uppercase tracking-widest font-mono mt-2 flex items-center gap-1">
                          <Trophy className="w-3.5 h-3.5 text-rose-500" />
                          <span>{story.achievement}</span>
                        </p>
                      </div>

                      {/* Stat box circle */}
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-black text-rose-500 leading-none">{story.stat}</div>
                        <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1 font-mono">{story.statLabel}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 p-3.5 rounded-sm bg-zinc-950 border border-white/5">
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold font-mono uppercase tracking-widest">Initial Weight</div>
                        <div className="text-white text-base font-extrabold mt-0.5">{story.beforeWeight}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold font-mono uppercase tracking-widest">Transform Weight</div>
                        <div className="text-rose-500 text-base font-black mt-0.5">{story.afterWeight}</div>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-zinc-900/60">
                        <div className="text-[10px] text-zinc-500 font-bold font-mono uppercase tracking-widest">Duration of workout</div>
                        <div className="text-white text-sm font-semibold mt-0.5">{story.duration} of Hard Work</div>
                      </div>
                    </div>

                    {/* Quotation text */}
                    <div className="relative mt-6 pt-6 border-t border-zinc-800/60">
                      <Quote className="w-8 h-8 text-rose-500/10 absolute top-2 left-0 pointer-events-none" />
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed italic pl-6">
                        "{story.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Program reference micro indicator */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/40 flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono">
                    <Dumbbell className="w-3.5 h-3.5 text-rose-500" />
                    <span>TRAINED AT DURGA JI MANDIR FLOOR</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
