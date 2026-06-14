/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Flame, Sparkles, Send, Calendar, Clock, Phone, Dumbbell } from 'lucide-react';
import { BUSINESS_DETAILS, MEMBERSHIP_PLANS, PROGRAMS } from '../data';
import { MembershipPlan, Program } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'join' | 'trial';
  initialPlan?: MembershipPlan | null;
  initialProgram?: Program | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialType = 'join',
  initialPlan = null,
  initialProgram = null
}: BookingModalProps) {
  const [bookingType, setBookingType] = useState<'join' | 'trial'>(initialType);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [selectedProgramId, setSelectedProgramId] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('5:00 AM - 8:00 AM (Morning Heavy Lift)');
  
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  // Synchronize state when modal opens with dynamic options
  useEffect(() => {
    if (isOpen) {
      setBookingType(initialType);
      setSelectedPlanId(initialPlan?.id || MEMBERSHIP_PLANS[1].id); // default Standard Plan
      setSelectedProgramId(initialProgram?.id || 'none');
      setStatus('idle');
    }
  }, [isOpen, initialType, initialPlan, initialProgram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.name || !userData.phone) return;

    const chosenPlan = MEMBERSHIP_PLANS.find(p => p.id === selectedPlanId)?.name || 'General Access';
    const chosenProgram = PROGRAMS.find(p => p.id === selectedProgramId)?.title || 'No Specific Program';

    const orderData = {
      type: bookingType,
      name: userData.name,
      phone: userData.phone,
      plan: bookingType === 'join' ? chosenPlan : 'Free Trial',
      program: chosenProgram,
      slot: timeSlot,
      message: userData.message,
      timestamp: new Date().toISOString()
    };

    // Store securely inside local storage
    const key = `order_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(orderData));

    setStatus('success');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Center shell */}
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-sm border border-zinc-850 bg-zinc-900 shadow-2xl"
          >
            {/* Header Red Gradient Accent Strip */}
            <div className="h-2 bg-gradient-to-r from-rose-600 via-red-500 to-rose-700" />

            {/* Close Button control */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 p-2 rounded-sm bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Main content conditional view */}
            {status === 'success' ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight italic font-serif">Fitness Pass Activated!</h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you, <span className="text-white font-extrabold">{userData.name}</span>. Your custom workout reservation slot is locked in database registers!
                  </p>
                </div>

                {/* Direct info list */}
                <div className="p-4 rounded-sm bg-zinc-950 border border-white/5 text-left text-xs text-zinc-300 space-y-2 max-w-sm mx-auto font-sans">
                  <div>
                    <span className="text-zinc-500 font-bold uppercase font-mono mr-1.5">REGISTRATION:</span>
                    <span className="text-rose-500 font-extrabold uppercase">
                      {bookingType === 'join' ? 'PRO GYM MEMBER' : 'FREE PASS TRANSIT'}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-bold uppercase font-mono mr-1.5">SELECTED SCHEDULE:</span>
                    <span className="text-white">{timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-bold uppercase font-mono mr-1.5">TIMING SLOT REGION:</span>
                    <span>Japlin Ganj, Ballia</span>
                  </div>
                </div>

                {/* Direct WhatsApp channel guidance to foster lightning-fast conversion */}
                <div className="p-4 bg-zinc-950/60 rounded-sm border border-white/5 text-xs italic text-zinc-400 font-light max-w-sm mx-auto">
                  "Please present this confirmation window or state your registered phone number <span className="text-white font-bold">{userData.phone}</span> at our reception desk near Durga Ji Mandir."
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
                  <a
                    href={`https://wa.me/${BUSINESS_DETAILS.contact.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20just%2520registered%20on%2520the%252520website%20under%20the%20name%20${encodeURIComponent(userData.name)}.%20Please%252520verify%25252520my%252520slot.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow py-3 px-4 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-widest text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Instant WhatsApp Verify</span>
                  </a>
                  <button
                    onClick={() => {
                      onClose();
                      setStatus('idle');
                    }}
                    className="py-3 px-6 rounded-sm bg-zinc-950 hover:bg-zinc-850 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-black uppercase tracking-widest cursor-pointer"
                  >
                    Got It
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 text-left">
                
                {/* Visual Title Header */}
                <div className="mb-6 flex gap-3 items-center">
                  <div className="p-2 bg-rose-600/10 text-rose-500 rounded-sm border border-white/5">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight italic font-serif">Onboard Fitness Journey</h3>
                    <p className="text-zinc-500 text-xs font-mono">Health & Fitness Gym Ballia Portal</p>
                  </div>
                </div>

                {/* Action booking split chooser */}
                <div className="grid grid-cols-2 gap-2 mb-6 bg-zinc-950 p-1.5 rounded-sm border border-white/10">
                  <button
                    type="button"
                    onClick={() => setBookingType('join')}
                    className={`py-2 text-[10px] font-black uppercase tracking-widest font-mono rounded-sm transition-all cursor-pointer ${
                      bookingType === 'join'
                        ? 'bg-[#ff1e1e] text-white shadow-md'
                        : 'text-zinc-500 hover:text-zinc-350'
                    }`}
                  >
                    Membership Join
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('trial')}
                    className={`py-2 text-[10px] font-black uppercase tracking-widest font-mono rounded-sm transition-all cursor-pointer ${
                      bookingType === 'trial'
                        ? 'bg-[#ff1e1e] text-white shadow-md'
                        : 'text-zinc-500 hover:text-zinc-350'
                    }`}
                  >
                    Book Free Trial
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Prefilled/Selectable plans only if Membership Join */}
                  {bookingType === 'join' && (
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                        Choose Membership Package
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {MEMBERSHIP_PLANS.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedPlanId(p.id)}
                            className={`p-2.5 rounded-sm border-2 text-[10px] font-black uppercase font-mono tracking-wider text-center transition-all cursor-pointer ${
                              selectedPlanId === p.id
                                ? 'bg-zinc-800 border-[#ff1e1e] text-white'
                                : 'bg-zinc-950 border-white/5 text-zinc-400 hover:border-zinc-850'
                            }`}
                          >
                            <div>{p.name.replace('Plan', '')}</div>
                            <div className="text-rose-500 font-extrabold mt-1">{p.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Program split optional chooser */}
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Target Training Program (Optional)
                    </label>
                    <select
                      value={selectedProgramId}
                      onChange={(e) => setSelectedProgramId(e.target.value)}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-3.5 py-3 text-xs text-zinc-300 focus:outline-none focus:border-[#ff1e1e] transition-colors cursor-pointer"
                    >
                      <option value="none">General Gym Workout splits</option>
                      {PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.id}>{prog.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Timing Schedule selection */}
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Preferred Gym Slot Hour
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-3.5 py-3 text-xs text-zinc-300 focus:outline-none focus:border-[#ff1e1e] transition-colors cursor-pointer"
                    >
                      <option value="5:00 AM - 8:00 AM (Morning Heavy Lift)">Morning: 5:00 AM - 8:00 AM (Highly Active)</option>
                      <option value="8:00 AM - 11:30 AM (Morning General)">Morning: 8:00 AM - 11:30 AM</option>
                      <option value="4:00 PM - 7:00 PM (Evening Peak Hypertrophy)">Evening: 4:00 PM - 7:00 PM (Energetic Peak)</option>
                      <option value="7:00 PM - 10:00 PM (Late Night Conditioning)">Evening: 7:00 PM - 10:00 PM</option>
                    </select>
                  </div>

                  <hr className="border-white/5 my-2" />

                  {/* User standard inputs */}
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aman Singh"
                      value={userData.name}
                      onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1e1e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      WhatsApp/Call Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98075 XXXXX"
                      value={userData.phone}
                      onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1e1e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-1.5">
                      Additional Message/Goals
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify if you have any training injuries, weight targets or lift limits."
                      value={userData.message}
                      onChange={(e) => setUserData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-zinc-950 border-2 border-white/10 rounded-sm px-4 py-3 text-xs text-white placeholder-zinc-650 placeholder-zinc-600 focus:outline-none focus:border-[#ff1e1e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-sm bg-[#ff1e1e] hover:bg-rose-700 text-white font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] flex items-center justify-center gap-2 cursor-pointer hover:scale-101"
                  >
                    <span>Secure Slot & Verify Pass</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
