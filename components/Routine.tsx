'use client';

import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const routineSteps = [
  {
    id: 1,
    text: 'Original skincare lotion',
    dark: false,
  },
  {
    id: 2,
    text: 'Eye Cream – Target puffiness or dark circles.',
    dark: false,
  },
  {
    id: 3,
    text: 'Use Vitamin C for brightening and protection.',
    dark: false,
  },
  {
    id: 4,
    text: 'Nourish your skin with simple pure essentials',
    dark: true,
  },
  {
    id: 5,
    text: 'Moisturizer – Keep your skin hydrated.',
    dark: false,
  },
  {
    id: 6,
    text: 'Cleanser – Remove makeup, dirt, and impurities.',
    dark: false,
  },
];

export default function Routine() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left column animation
    gsap.from(leftColRef.current?.children || [], {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Grid cards animation
    gsap.from(gridRef.current?.children || [], {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-tertiary-50 text-primary-900 py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Column */}
        <div ref={leftColRef} className="lg:col-span-4 flex flex-col justify-center">
          <h2 className="text-h2 font-primary font-light leading-tight mb-6">
            Radiance starts<br />with routine
          </h2>
          <p className="text-body font-light text-primary-900/80 mb-10 max-w-sm">
            Glowing skin doesn't happen overnight — it starts with the little things you do every day.
          </p>
          <div>
            <button className="bg-primary-900 text-tertiary-50 px-8 py-4 rounded-full text-button hover:bg-primary-800 transition-colors">
              See If You Are Eligible
            </button>
          </div>
        </div>

        {/* Right Column - Grid */}
        <div ref={gridRef} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {routineSteps.map((step) => (
            <div 
              key={step.id}
              className={`p-8 rounded-3xl flex flex-col gap-6 transition-transform hover:-translate-y-1 ${
                step.dark 
                  ? 'bg-primary-900 text-tertiary-50' 
                  : 'bg-tertiary-200 text-primary-900'
              }`}
            >
              <CheckCircle2 
                className={`w-6 h-6 ${step.dark ? 'text-tertiary-50' : 'text-primary-900/60'}`} 
                strokeWidth={1.5} 
              />
              <p className="text-body-large font-light leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
