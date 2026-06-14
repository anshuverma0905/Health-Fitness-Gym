/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Phone, Shield } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data';
import { MembershipPlan } from '../types';

interface MembershipProps {
  onPlanSelect: (plan: MembershipPlan, isAnnual: boolean) => void;
}

export default function Membership({ onPlanSelect }: MembershipProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const calculatePrice = (basePrice: string, cycle: 'monthly' | 'annual') => {
    const numericPart = parseInt(basePrice.replace(/[^0-9]/g, ''), 10);
    if (cycle === 'monthly') {
      return basePrice;
    } else {
      // Apply a generous 20% discount for annual commitments, standard in premium gyms
      const discountedMonthlyPrice = Math.floor(numericPart * 0.82);
      return `₹${discountedMonthlyPrice}`;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
            MEMBERSHIP TIERS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white">
            AFFORDABLE VALUE, <br />
            <span className="text-rose-500">UNCOMPROMISED LIFESTYLE</span>
          </h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto mt-6" />
          <p className="text-zinc-400 mt-4 text-sm sm:text-base font-light">
            Select a package suited for your long-term consistency. No hidden maintenance margins or onboarding charges.
          </p>
        </div>

        {/* Toggle billing Switch */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider font-mono ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>
            MONTHLY STANDARD
          </span>
          
          <button
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-7 rounded-sm bg-zinc-900 border border-zinc-800 p-1 flex items-center transition-all cursor-pointer relative"
            aria-label="Toggle billing cycle"
          >
            <div 
              className={`w-5 h-5 rounded-sm bg-rose-600 transition-all ${
                billingCycle === 'annual' ? 'translate-x-[26px]' : 'translate-x-0'
              }`}
            />
          </button>

          <span className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono ${billingCycle === 'annual' ? 'text-rose-500' : 'text-zinc-500'}`}>
            <span>ANNUAL DISCOUNTS</span>
            <span className="px-2 py-0.5 rounded-sm bg-rose-950/50 border border-rose-900 text-rose-400 text-[10px] font-black leading-none">
              SAVE ~20%
            </span>
          </span>
        </div>

        {/* Plans Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan, index) => {
            const displayPrice = calculatePrice(plan.price, billingCycle);
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col justify-between rounded-sm border bg-zinc-90 w-full transition-all duration-300 p-6 sm:p-8 animate-fade ${
                  plan.popular
                    ? 'bg-zinc-900 border-rose-600 border-2 shadow-[0_15px_45px_rgba(255,30,30,0.15)] scale-100 lg:scale-[1.03] z-10'
                    : 'bg-[#0a0a0a] border-white/5 hover:border-zinc-800 shadow-xl'
                }`}
              >
                {/* Float Popular premium indicator */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff1e1e] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-sm shadow-md border border-white/10 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current animate-pulse" />
                    <span>RECOMMENDED BY EXPERTS</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black uppercase text-white mb-2 tracking-tight italic block font-serif">
                    {plan.name}
                  </h3>
                  
                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 my-6">
                    <span className="text-4xl sm:text-5xl font-black text-rose-500 tracking-tighter font-serif uppercase italic">{displayPrice}</span>
                    <span className="text-zinc-450 text-zinc-400 text-[10px] font-mono font-bold uppercase">
                      / {billingCycle === 'monthly' ? 'Month' : 'Month, billed annually'}
                    </span>
                  </div>

                  <hr className="border-white/5 my-5" />

                  {/* Feature checklist */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <div className={`w-5 h-5 rounded-sm flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-rose-950 text-rose-500' : 'bg-zinc-950 text-zinc-500'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion Trigger Button */}
                <button
                  onClick={() => onPlanSelect(plan, billingCycle === 'annual')}
                  className={`w-full py-4 px-4 rounded-sm font-black text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#ff1e1e] hover:bg-rose-700 text-white shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:scale-102'
                      : 'bg-zinc-950 border-2 border-white/10 hover:border-white text-zinc-300 hover:text-white'
                  }`}
                >
                  {plan.popular ? 'Subscribe Package' : 'Choose Plan'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Micro Policy note below pricing */}
        <div className="mt-12 flex justify-center items-center gap-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest font-mono text-center max-w-md mx-auto">
          <Shield className="w-4 h-4 text-rose-500 shrink-0" />
          <span>7-Day Form Cancellation Shield • No Transfer Fee</span>
        </div>
      </div>
    </section>
  );
}
