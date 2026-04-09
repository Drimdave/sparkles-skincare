'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const massiveTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial states
    gsap.set([headlineRef.current, ctaRef.current, massiveTextRef.current], { 
      y: 50, 
      opacity: 0 
    });
    gsap.set(bgRef.current, { scale: 1.05 });

    // Animations
    tl.to(bgRef.current, {
      scale: 1,
      duration: 2,
      ease: 'power2.out',
    })
    .to(headlineRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    }, '-=1.5')
    .to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
    }, '-=1.2')
    .to(massiveTextRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
    }, '-=1');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary-900">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <Image 
          src="https://i.ibb.co/DD65zT7z/Gemini-Generated-Image-j7ut49j7ut49j7ut-Photoroom.png" 
          alt="Glowing skincare model" 
          fill 
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-transparent to-primary-900/60 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-8 pt-32 md:pt-40 pb-4">
        
        {/* Top Content: Headline & CTA */}
        <div className="max-w-3xl mt-12">
          <h1 
            ref={headlineRef} 
            className="text-h1 font-primary text-tertiary-300 mb-8 md:mb-12"
          >
            Skincare for<br />Body & Every Skin
          </h1>
          
          <div 
            ref={ctaRef}
            className="inline-flex items-center gap-4 md:gap-6 text-tertiary-300 border-b border-tertiary-300/40 pb-3 cursor-pointer hover:border-tertiary-300 transition-colors group"
          >
            <span className="text-body-large">See if you are eligible for treatments</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom Content: Massive Brand Text */}
        <div className="w-full flex justify-center">
          <h2 
            ref={massiveTextRef}
            className="text-display font-primary text-tertiary-300"
          >
            Sparkles
          </h2>
        </div>

      </div>
    </section>
  );
}
