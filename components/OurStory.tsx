'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurStory() {
  const containerRef = useRef<HTMLElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  const text1 = "At Sparkles, we believe skincare should be simple, honest, and for everyone. Our mission is to create gentle, ";
  const text2 = "effective care for all skin types and tones.";

  useGSAP(() => {
    // Typing effect: stagger the opacity of each word
    const words = gsap.utils.toArray('.story-word');
    
    gsap.from(words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      },
      opacity: 0,
      y: 10,
      duration: 0.4,
      stagger: 0.03,
      ease: 'power2.out',
    });

    // Fade in avatars and testimonial
    gsap.from(avatarsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
    });

    // Fade in left column elements
    gsap.from(leftColRef.current?.children || [], {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      },
      opacity: 0,
      x: -20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

  }, { scope: containerRef });

  // Helper to split text into words for animation
  const renderWords = (text: string, className: string = '') => {
    return text.split(' ').map((word, index) => (
      <span key={index} className={`story-word inline-block mr-[0.25em] ${className}`}>
        {word}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="bg-tertiary-300 text-primary-900 py-24 md:py-32 px-6 md:px-8 min-h-screen flex flex-col justify-center relative z-10">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 h-full">
        
        {/* Left Column */}
        <div ref={leftColRef} className="md:col-span-4 flex flex-col justify-between h-full min-h-[200px] md:min-h-[500px]">
          <div className="text-h4 font-primary font-light">
            / Our Story
          </div>
          
          <div className="mt-auto">
            <button className="inline-flex items-center gap-3 px-6 py-3 border border-primary-900 rounded-full text-button uppercase tracking-wider hover:bg-primary-900 hover:text-tertiary-300 transition-colors group">
              <span className="w-2 h-2 bg-primary-900 group-hover:bg-tertiary-300 rounded-full transition-colors" />
              About More
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 flex flex-col justify-between h-full min-h-[300px] md:min-h-[500px]">
          <div className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.3] font-primary font-light max-w-4xl">
            {renderWords(text1)}
            {renderWords(text2, 'opacity-50')}
          </div>

          {/* Avatars & Testimonial */}
          <div ref={avatarsRef} className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mt-12 md:mt-auto">
            <div className="flex -space-x-4">
              {[
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
              ].map((src, i) => (
                <div key={i} className="relative w-14 h-14 rounded-2xl border-2 border-tertiary-300 overflow-hidden">
                  <Image 
                    src={src}
                    alt={`Customer ${i + 1}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="text-body max-w-sm font-light leading-relaxed">
              Sparkles has truly changed my life. I struggled with my skin for years.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
