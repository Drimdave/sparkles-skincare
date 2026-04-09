'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  { percent: '89%', label: 'Healthier, balanced skin' },
  { percent: '70%', label: 'radiant glow' },
  { percent: '45%', label: 'Gentle hydration' },
  { percent: '32%', label: 'Natural,' },
];

export default function Benefits() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      }
    });

    // Left column text
    tl.from(leftColRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, 0);

    // Vertical line
    tl.from('.vertical-line', {
      scaleY: 0,
      duration: 1.2,
      ease: 'power3.inOut'
    }, 0.2);

    // Connector lines (SVG paths)
    tl.from('.connector-line path', {
      strokeDasharray: 200,
      strokeDashoffset: 200,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, 0.6);

    // Connector dots
    tl.from('.connector-line circle', {
      opacity: 0,
      scale: 0,
      transformOrigin: 'center',
      duration: 0.4,
      stagger: 0.15,
      ease: 'back.out(2)'
    }, 0.8);

    // Glassmorphism Cards
    tl.from('.benefit-card', {
      opacity: 0,
      x: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, 0.8);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-primary-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="https://i.ibb.co/Z6hMHYNZ/Gemini-Generated-Image-xeo42bxeo42bxeo4-Photoroom.png" 
          alt="Woman applying skincare" 
          fill 
          className="object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        {/* Warm, dark gradient overlay to match the design's mood and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/40 to-primary-900/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 py-16 md:py-24 min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Column */}
        <div ref={leftColRef} className="w-full lg:w-1/2 flex flex-col justify-between pt-12 pb-0 lg:pb-12 text-center lg:text-left">
          <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.1] text-white font-primary font-light">
            Benefits you'll<br />Experience
          </h2>
          <p className="text-body-large text-white/80 max-w-md font-light mt-8 lg:mt-0 mx-auto lg:mx-0">
            With consistent care using our thoughtfully crafted products, you'll notice your skin becoming healthier, more balanced, and deeply hydrated.
          </p>
        </div>

        {/* Right Column */}
        <div ref={rightColRef} className="w-full lg:w-1/2 relative flex flex-col justify-center gap-6 lg:pl-16">
          
          {/* Central Vertical Line (Hidden on mobile for better layout) */}
          <div className="vertical-line absolute left-0 lg:left-8 top-12 bottom-12 w-px bg-white/30 origin-top hidden lg:block" />

          {/* Cards */}
          {benefits.map((benefit, index) => {
            // Calculate dynamic SVG paths based on card position
            // Top cards angle up, bottom cards angle down
            const isTopHalf = index < benefits.length / 2;
            const yOffset = isTopHalf ? -40 : 40; // How far up/down the angle goes
            
            return (
              <div key={index} className="relative w-full flex justify-end">
                
                {/* Multi-segment Connector Line & Dot (SVG) */}
                <div className="connector-line absolute left-0 top-1/2 -translate-y-1/2 w-[25%] h-[100px] hidden lg:block pointer-events-none">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path 
                      d={`M 0 50 L 40 ${50 + yOffset} L 100 ${50 + yOffset}`} 
                      fill="none" 
                      stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle 
                      cx="100" 
                      cy={50 + yOffset} 
                      r="3" 
                      fill="transparent" 
                      stroke="rgba(255,255,255,0.6)" 
                      strokeWidth="1" 
                    />
                  </svg>
                </div>

                {/* Glassmorphism Card */}
                <div className="benefit-card w-full lg:w-[75%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative group hover:bg-white/15 transition-colors cursor-default">
                  <Heart 
                    className="absolute top-6 right-6 w-5 h-5 text-white/60 group-hover:text-white transition-colors cursor-pointer" 
                    strokeWidth={1.5} 
                  />
                  <h3 className="text-h1 text-white font-light mb-2">{benefit.percent}</h3>
                  <p className="text-body text-white/90 font-light">{benefit.label}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
