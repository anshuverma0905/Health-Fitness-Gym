/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ZoomIn } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'workout' | 'equipment' | 'interior' | 'transformations'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', name: 'ALL IMAGES' },
    { id: 'equipment', name: 'MACHINES & RACKS' },
    { id: 'workout', name: 'LIVE WORKOUTS' },
    { id: 'interior', name: 'GYM INTERIOR' },
    { id: 'transformations', name: 'TRANSFORMATIONS' },
  ] as const;

  const filteredItems = activeTab === 'all'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden text-center">
      <div className="absolute right-10 bottom-1/3 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 animate-fade">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
            PHOTO REPOSITORY
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            WITNESS THE EFFORT, <br />
            <span className="text-rose-500">FEEL THE INTENSITY</span>
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 font-light text-sm sm:text-base">
            No stock graphics. Review our actual clean floor, raw loading equipment, and local member results recorded at Japlin Ganj, Ballia.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-2xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs font-black font-mono tracking-widest rounded-sm border-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#ff1e1e] border-[#ff1e1e] text-white shadow-[0_0_20px_rgba(255,30,30,0.3)]'
                  : 'bg-[#0a0a0a] border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedItem(item)}
                className="group relative h-64 rounded-sm overflow-hidden border border-white/5 hover:border-rose-600/35 cursor-pointer shadow-xl bg-zinc-900 animate-fade"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" />

                {/* Overlay card contents */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-left opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="self-end p-2 rounded-sm bg-rose-600 text-white shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#ff1e1e] font-black font-mono mb-1 block">
                      {item.category}
                    </span>
                    <h4 className="text-white font-extrabold text-sm uppercase font-sans leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-sm overflow-hidden border-2 border-white/10 bg-zinc-950 shadow-2xl cursor-default"
              >
                {/* Control Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white active:scale-90 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Aspect Image container */}
                <div className="relative h-[65vh] w-full">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain bg-zinc-950"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Meta details bar */}
                <div className="p-6 bg-zinc-950 border-t border-zinc-900 text-left">
                  <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest font-mono bg-rose-600/10 text-rose-500 rounded-sm border border-rose-900/30">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white uppercase mt-3 tracking-wide font-sans">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1">Recorded live inside Health & Fitness Gym Ballia</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
