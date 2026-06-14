/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import BmiCalculator from './components/BmiCalculator';
import Gallery from './components/Gallery';
import Transformations from './components/Transformations';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { MembershipPlan, Program } from './types';
import { Flame, Star, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS } from './data';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'join' | 'trial'>('join');
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const triggerJoinModal = () => {
    setModalType('join');
    setSelectedPlan(null);
    setSelectedProgram(null);
    setIsModalOpen(true);
  };

  const triggerTrialModal = () => {
    setModalType('trial');
    setSelectedPlan(null);
    setSelectedProgram(null);
    setIsModalOpen(true);
  };

  const handleProgramInquire = (program: Program) => {
    setModalType('join');
    setSelectedPlan(null);
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handlePlanSelect = (plan: MembershipPlan, isAnnual: boolean) => {
    setModalType('join');
    setSelectedPlan(plan);
    setSelectedProgram(null);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-rose-600 selection:text-white">
      {/* Sticky Header with micro action bar */}
      <Header onJoinClick={triggerJoinModal} onTrialClick={triggerTrialModal} />

      {/* Main Hero Showcase */}
      <Hero onJoinClick={triggerJoinModal} onTrialClick={triggerTrialModal} />

      {/* Narrative Gym Introduction (About) */}
      <About />

      {/* Grid of Elite Amenities (Features) */}
      <Features />

      {/* Why Choose Us & Trust Score card (WhyChooseUs) */}
      <WhyChooseUs />

      {/* 6 Core Professional training schedules (Programs) */}
      <Programs onProgramInquire={handleProgramInquire} />

      {/* Mid Interactive Call To Action Banner for fast conversion */}
      <section className="relative py-20 bg-[#070707] border-y-2 border-white/10 overflow-hidden text-center">
        {/* Subtle background red flare */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600/10 text-rose-500 rounded-sm text-xs font-bold font-mono border border-rose-900/30">
            <Flame className="w-3.5 h-3.5" />
            <span>START YOUR TRANSFORMATION TODAY</span>
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            JOIN HUNDREDS OF MEMBERS WHO TRUST <br />
            <span className="text-rose-500">HEALTH & FITNESS GYM BALLIA</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Our specialized metabolic, strength, and customized athletic programs are designed to break limits safely. Your assessment schedule starts standard!
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_DETAILS.contact.replace(/\s+/g, '')}`}
              className="px-8 py-5 bg-zinc-950 border-2 border-white/10 hover:border-white text-white font-black text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <Phone className="w-4 h-4 text-rose-500 fill-current group-hover:scale-110 transition-transform" />
              <span>Call +91 98075 36188</span>
            </a>
            <button
              onClick={triggerJoinModal}
              className="px-8 py-5 bg-[#ff1e1e] hover:bg-rose-700 text-white font-black text-xs uppercase tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:scale-[1.02] cursor-pointer"
            >
              Join Membership Now
            </button>
          </div>
        </div>
      </section>

      {/* Interactive BMI diagnostics calculator */}
      <BmiCalculator />

      {/* Photo Gallery featuring physical location machines and interior */}
      <Gallery />

      {/* Member Testimonial stars and reviews blocks */}
      <Testimonials />

      {/* Before After Transformation successes */}
      <Transformations />

      {/* Multi tier Pricing Structures */}
      <Membership onPlanSelect={handlePlanSelect} />

      {/* Interactive Google maps section with registration forms */}
      <Contact />

      {/* Footer Navigation */}
      <Footer />

      {/* Interactive Booking modal wizard */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={modalType}
        initialPlan={selectedPlan}
        initialProgram={selectedProgram}
      />
    </div>
  );
}
