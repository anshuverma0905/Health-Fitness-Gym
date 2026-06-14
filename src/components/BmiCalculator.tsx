/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Flame, Check } from 'lucide-react';

export default function BmiCalculator() {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(172);
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('');
  const [colorClass, setColorClass] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const computedBmi = Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
    setBmi(computedBmi);

    let currentStatus = '';
    let currentTone = '';
    let currentAdvice = '';

    if (computedBmi < 18.5) {
      currentStatus = 'Underweight';
      currentTone = 'text-amber-400';
      currentAdvice = 'You should focus on our "Muscle Gain Program" with clean hyper-caloric diets to pack on healthy compound strength safely.';
    } else if (computedBmi >= 18.5 && computedBmi < 24.9) {
      currentStatus = 'Normal Weight';
      currentTone = 'text-emerald-400';
      currentAdvice = 'Fantastic state! Keep your lean retention and stamina optimal with our "Functional Training" or "Strength protocols".';
    } else if (computedBmi >= 25 && computedBmi < 29.9) {
      currentStatus = 'Overweight';
      currentTone = 'text-orange-500';
      currentAdvice = 'Recommended to opt for our high-intensity "Weight Loss Transformation" coupled with metabolic cardio zone sessions.';
    } else {
      currentStatus = 'Obese';
      currentTone = 'text-red-500';
      currentAdvice = 'Consider working 1-on-1 with building cardio volume on our "Personal Training" track to safely lower resting heart-rates.';
    }

    setStatus(currentStatus);
    setColorClass(currentTone);
    setAdvice(currentAdvice);
  };

  return (
    <section id="bmi" className="py-24 bg-gradient-to-b from-neutral-900 to-zinc-950 border-t border-zinc-900 overflow-hidden relative">
      <div className="absolute left-1/3 top-1/4 w-[250px] h-[250px] bg-rose-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Copywriting and value props */}
          <div className="w-full lg:w-1/2 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-500 font-extrabold font-mono block mb-3">
              INSTANT METRICS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-none tracking-tighter uppercase italic text-white mb-6">
              COMPUTE YOUR BODY <br />
              <span className="text-rose-500">MASS INDEX IN SECONDS</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed font-light">
              Your BMI ratio is a helpful diagnostic baseline to organize your training splits. Use our calculator below to get immediately targeted gym strategies tailored for your current weight range.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm border border-white/5 bg-[#0a0a0a]">
                <h4 className="text-white font-bold text-sm mb-1">Underweight (&lt;18.5)</h4>
                <p className="text-zinc-400 text-xs font-light">Focus on high protein loading, heavy lifts & slow eccentric recovery cycles.</p>
              </div>
              <div className="p-4 rounded-sm border border-white/5 bg-[#0a0a0a]">
                <h4 className="text-emerald-400 font-bold text-sm mb-1 font-sans">Healthy (18.5 - 24.9)</h4>
                <p className="text-zinc-400 text-xs font-light">Focus on strength progression, cardio output, and lean body recomposition.</p>
              </div>
              <div className="p-4 rounded-sm border border-white/5 bg-[#0a0a0a]">
                <h4 className="text-orange-400 font-bold text-sm mb-1">Overweight (25 - 29.9)</h4>
                <p className="text-zinc-400 text-xs font-light">Prioritize metabolic conditioning splits and strict calorie deficit limits.</p>
              </div>
              <div className="p-4 rounded-sm border border-white/5 bg-[#0a0a0a]">
                <h4 className="text-red-500 font-bold text-sm mb-1">Obese (&gt;30.0)</h4>
                <p className="text-zinc-400 text-xs font-light">Structured low-impact joint movements, progressive cardio & 1-on-1 sparring.</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive state card */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-rose-600 to-rose-800 opacity-15 blur-lg" />
              
              <div className="relative rounded-sm border-2 border-white/10 bg-zinc-900/95 p-8 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-sm bg-rose-600/10 text-rose-500 border border-white/5">
                    <Calculator className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wider">BMI Diagnostics Tool</h3>
                    <p className="text-zinc-500 text-xs font-mono">Ballia Health & Fitness Portal</p>
                  </div>
                </div>

                <form onSubmit={calculateBMI} className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">Your Height: <span className="text-white text-sm font-sans font-bold">{height} cm</span></label>
                    </div>
                    <input
                      type="range"
                      min="120"
                      max="220"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-950 rounded-sm appearance-none cursor-pointer accent-rose-600"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-600 font-mono mt-1">
                      <span>120 cm</span>
                      <span>170 cm</span>
                      <span>220 cm</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-widest font-mono">Your Weight: <span className="text-white text-sm font-sans font-bold">{weight} kg</span></label>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="150"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-950 rounded-sm appearance-none cursor-pointer accent-rose-600"
                    />
                    <div className="flex justify-between text-[10px] text-zinc-600 font-mono mt-1">
                      <span>40 kg</span>
                      <span>95 kg</span>
                      <span>150 kg</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-sm bg-[#ff1e1e] hover:bg-rose-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,30,30,0.3)] hover:scale-[1.02] cursor-pointer"
                  >
                    Calculate My Ideal Target
                  </button>
                </form>

                {/* Conditional Results render inside card */}
                {bmi !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-5 rounded-sm bg-zinc-950 border border-white/5 text-left"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono">YOUR BMI:</span>
                      <span className="text-xs font-bold uppercase tracking-wider font-mono">Status: <span className={`font-black ${colorClass}`}>{status}</span></span>
                    </div>
                    
                    <div className="text-5xl font-black text-white">{bmi}</div>

                    {/* Progress visual bar */}
                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden mt-3.5 relative flex">
                      <div className="h-full bg-amber-400" style={{ width: '18.5%' }} />
                      <div className="h-full bg-emerald-500" style={{ width: '25%' }} />
                      <div className="h-full bg-orange-500" style={{ width: '25%' }} />
                      <div className="h-full bg-red-600" style={{ width: '31.5%' }} />
                      
                      {/* Interactive pointer position based on BMI */}
                      <div 
                        className="absolute top-0 bottom-0 w-1.5 bg-white border border-black shadow-md -translate-x-1/2 transition-all duration-500"
                        style={{ left: `${Math.min(Math.max((bmi - 10) * 2.5, 2), 98)}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-[8px] text-zinc-500 font-mono mt-1 leading-none uppercase">
                      <span>UNDERWEIGHT</span>
                      <span>NORMAL</span>
                      <span>OVERWEIGHT</span>
                      <span>OBESE</span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-light mt-4 pt-4 border-t border-zinc-800/60 font-sans italic">
                      <span className="text-rose-500 font-bold block inline-block not-italic uppercase tracking-widest text-[9px] mr-1.5 font-mono mb-1">COACH RECOMMENDATION:</span>
                      {advice}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
