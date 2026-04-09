'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Quality() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      }
    });

    // Heading
    tl.from('.quality-heading', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, 0);

    // Images
    tl.from('.quality-image', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    }, 0.2);

    // Text Blocks
    tl.from('.quality-text', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out'
    }, 0.4);

    // Vertical Lines
    tl.from('.line-v', {
      scaleY: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.inOut'
    }, 0.6);

    // Horizontal Lines
    tl.from('.line-h', {
      scaleX: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, 0.9);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-tertiary-50 text-primary-900 py-24 px-8 md:px-16 overflow-hidden">
      {/* Reduced gap-y to bring images closer together */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-y-4 lg:gap-x-16 items-center">
        
        {/* 1. Heading (Desktop: Col 1, Row 1) */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-start pt-4 text-center lg:text-left">
          <h2 className="quality-heading text-[clamp(2.25rem,10vw,48.8px)] leading-[1.1] font-primary font-light max-w-sm mx-auto lg:mx-0">
            Quality-Tested<br />Treatments You<br />Can Trust
          </h2>
        </div>

        {/* 2. Top Image (Desktop: Col 2, Row 1) */}
        <div className="flex justify-center lg:col-start-2 lg:row-start-1 w-full lg:w-[300px]">
          <div className="quality-image relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-primary-900/20 shrink-0">
            <Image 
              src="https://i.ibb.co/4R4c0vP5/Gemini-Generated-Image-z2ibasz2ibasz2ib-Photoroom.png" 
              alt="Woman smiling with skincare" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 3. Top Text (Desktop: Col 3, Row 1) */}
        <div className="flex justify-start lg:col-start-3 lg:row-start-1">
          <div className="quality-text relative py-4 lg:py-8 lg:pl-16 text-center lg:text-left w-full">
            <div className="line-v absolute left-0 top-0 bottom-0 w-px bg-primary-900/30 origin-top hidden lg:block" />
            <div className="line-h absolute right-full top-1/2 w-12 xl:w-16 h-px bg-primary-900/30 origin-right hidden lg:block" />
            
            <h4 className="text-h5 font-primary font-light mb-3">Clean & Conscious Ingredients</h4>
            <p className="text-body font-light text-primary-900/80">
              Our skincare is made with plant-<br className="hidden xl:block" />powered, non-toxic ingredients<br className="hidden xl:block" />that your skin can trust.
            </p>
          </div>
        </div>

        {/* 4. Middle Image (Desktop: Col 2, Row 2) */}
        <div className="flex justify-center lg:col-start-2 lg:row-start-2 w-full lg:w-[300px] mt-8 lg:mt-0">
          <div className="quality-image relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-primary-900/20 shrink-0 z-10">
            <Image 
              src="https://i.ibb.co/RG5LZckt/Gemini-Generated-Image-kiefjjkiefjjkief.png" 
              alt="Woman using jade roller" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 5. Middle Text (Desktop: Col 1, Row 2) */}
        <div className="flex justify-end lg:col-start-1 lg:row-start-2">
          <div className="quality-text relative py-4 lg:py-8 lg:pr-16 w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 text-center lg:text-right">
            <div className="line-v absolute right-0 top-0 bottom-0 w-px bg-primary-900/30 origin-top hidden lg:block" />
            <div className="line-h absolute left-full top-1/2 w-12 xl:w-16 h-px bg-primary-900/30 origin-left hidden lg:block" />
            
            <h4 className="text-h5 font-primary font-light mb-3">Visible Results, Gently</h4>
            <p className="text-body font-light text-primary-900/80">
              Experience smoother,<br className="hidden xl:block" />calmer skin with routines<br className="hidden xl:block" />that actually work—no harsh<br className="hidden xl:block" />side effects.
            </p>
          </div>
        </div>

        {/* 6. Bottom Image (Desktop: Col 2, Row 3) */}
        <div className="flex justify-center lg:col-start-2 lg:row-start-3 w-full lg:w-[300px] mt-8 lg:mt-0">
          <div className="quality-image relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-primary-900/20 shrink-0">
            <Image 
              src="https://i.ibb.co/XrJZ2vbz/Gemini-Generated-Image-yqk2i3yqk2i3yqk2.png" 
              alt="Woman applying face mask" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 7. Bottom Text (Desktop: Col 3, Row 3) */}
        <div className="flex justify-start lg:col-start-3 lg:row-start-3">
          <div className="quality-text relative py-4 lg:py-8 lg:pl-16 text-center lg:text-left w-full">
            <div className="line-v absolute left-0 top-0 bottom-0 w-px bg-primary-900/30 origin-top hidden lg:block" />
            <div className="line-h absolute right-full top-1/2 w-12 xl:w-16 h-px bg-primary-900/30 origin-right hidden lg:block" />
            
            <h4 className="text-h5 font-primary font-light mb-3">Dermatologist Recommended</h4>
            <p className="text-body font-light text-primary-900/80">
              Backed by research and<br className="hidden xl:block" />guided by professionals,
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
