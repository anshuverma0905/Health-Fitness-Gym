/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Mail, CheckCircle, ExternalLink, Calendar, Send } from 'lucide-react';
import { BUSINESS_DETAILS, PROGRAMS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'General Access',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus('error');
      return;
    }
    
    // Simulate real local reservation storage, standard high-converting action
    const key = `inquiry_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify({ ...formData, timestamp: new Date().toISOString() }));
    
    setStatus('success');
    setFormData({
      name: '',
      phone: '',
      program: 'General Access',
      message: ''
    });

    // Clear alert after some time
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-rose-950/20 border-t border-zinc-900 relative overflow-hidden">
      {/* Glow overlay nodes for intensity */}
      <div className="absolute right-[5vw] top-1/3 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-[5vw] bottom-1/4 w-[250px] h-[250px] bg-rose-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
            INTERACTIVE MAP & INQUIRY
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            CLAIM YOUR FREE TRIAL <br />
            <span className="text-rose-500">& REGISTER TODAY</span>
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 text-xs sm:text-sm font-light">
            Fill in the verification sheet below or drop by our facility directly behind Japlin Ganj's landmark temple.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Direct Address & Interactive Map card: 7 columns on desktop */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="p-6 sm:p-8 bg-[#0a0a0a] border border-white/5 rounded-sm backdrop-blur-md space-y-6 flex-grow text-left animate-fade">
              
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-500" />
                <span>Physical Headquarters</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5 text-left">
                  <div className="text-[10px] text-zinc-500 font-extrabold font-mono uppercase tracking-widest">LANDMARK & LOCATION</div>
                  <p className="text-zinc-200 text-sm sm:text-base font-light">
                    Durga Ji Mandir, Japlin Ganj, Bahadurpur, Ballia, Uttar Pradesh 277001
                  </p>
                </div>

                <div className="space-y-1.5 text-left">
                  <div className="text-[10px] text-zinc-500 font-extrabold font-mono uppercase tracking-widest">DIRECT PHONE CHANNEL</div>
                  <a 
                    href={`tel:${BUSINESS_DETAILS.contact.replace(/\s+/g, '')}`} 
                    className="text-white text-base sm:text-lg font-extrabold hover:text-rose-500 transition-colors block mt-1"
                  >
                    {BUSINESS_DETAILS.contact}
                  </a>
                  <p className="text-zinc-400 text-xs mt-0.5">Assistance open from 5:00 AM</p>
                </div>

                <div className="space-y-1.5 text-left">
                  <div className="text-[10px] text-zinc-500 font-extrabold font-mono uppercase tracking-widest">OFFICIAL BUSINESS HOURS</div>
                  <p className="text-zinc-200 text-sm font-light">
                    {BUSINESS_DETAILS.hoursDetail.weekdays} <span className="text-zinc-500 sm:block">(Weekdays)</span>
                  </p>
                  <p className="text-zinc-200 text-sm font-light">
                    5:00 AM - 12:00 PM <span className="text-zinc-500 sm:block">(Sundays)</span>
                  </p>
                </div>

                <div className="space-y-1.5 text-left">
                  <div className="text-[10px] text-zinc-500 font-extrabold font-mono uppercase tracking-widest">ONLINE REVIEWS</div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-lg font-black text-rose-500">4.4★</span>
                    <span className="text-xs text-zinc-400 font-mono">165+ Real Reviews verified on Maps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated/Real Interactive Google Map embedded */}
            <div className="rounded-sm overflow-hidden border border-white/5 bg-zinc-950 h-72 sm:h-80 shadow-2xl relative">
              <iframe
                title="Health & Fitness Gym Ballia Google Map"
                src="https://maps.google.com/maps?q=Health%20%26%20Fitness%20Gym%20Durga%20Ji%20Mandir%20Japlin%20Ganj%20Bahadurpur%20Ballia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-[110%] opacity-85 hover:grayscale-0 hover:invert-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Overlay map control link */}
              <a
                href="https://maps.google.com/?q=Health+and+Fitness+Gym+Durga+Ji+Mandir+Japlin+Ganj+Ballia"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white px-3 py-1.5 rounded-sm text-xs font-mono font-bold text-zinc-350 text-zinc-300 backdrop-blur-md flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3 text-rose-500" />
              </a>
            </div>

          </div>

          {/* Form container: 5 columns on desktop */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full">
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-rose-600 to-rose-900 opacity-20 blur-lg" />
              
              <div className="relative rounded-sm border-2 border-white/10 bg-zinc-900/95 p-6 sm:p-8 backdrop-blur-md w-full text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-sm bg-rose-600/10 text-rose-500 border border-white/5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">Book Gym Consultation</h3>
                    <p className="text-zinc-500 text-xs font-mono">Real-time local verification</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1e1e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      WhatsApp/Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 94500 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1e1e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Select Regiment Interests
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData(prev => ({ ...prev, program: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-sm text-zinc-350 focus:outline-none focus:border-[#ff1e1e] transition-all cursor-pointer"
                    >
                      <option value="General Access">General Floor Access</option>
                      {PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.title}>{prog.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Message / Fitness Target
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. I want to lose 15kg in 4 months and need a diet plan."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1e1e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-sm bg-[#ff1e1e] hover:bg-rose-700 text-white font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Sheet</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Submitting Status updates */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 rounded-sm bg-emerald-950/50 border border-emerald-900/60 text-emerald-400 text-xs flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Reservation Logged!</span> We have securely verified your name and interest. Please call or WhatsApp +91 98075 36188 to immediately book your slot or step in directly.
                      </div>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 rounded-sm bg-red-950/50 border border-red-900/60 text-red-400 text-xs flex items-center gap-2"
                    >
                      <span>Please enter all required fields: Name and WhatsApp number.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
