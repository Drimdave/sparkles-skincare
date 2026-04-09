'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Cooper',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    quote: 'From packaging to performance, everything feels premium. I love the minimal routine with visible results',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: 'The best skincare decision I have ever made. My skin has never looked this consistently clear and radiant.',
  },
  {
    id: 3,
    name: 'Robert Fox',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'I was skeptical at first, but the results speak for themselves. Truly a game-changer for my daily routine.',
  },
  {
    id: 4,
    name: 'Bessie Cooper',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    quote: 'A luxurious experience from start to finish. The textures are incredible and it absorbs instantly.',
  },
  {
    id: 5,
    name: 'Darlene Robertson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
    quote: 'Finally, a brand that understands sensitive skin. I have experienced zero irritation and massive improvements.',
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getOffset = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(testimonials.length - 1)) return 1;
    if (diff === -1 || diff === testimonials.length - 1) return -1;
    if (diff === 2 || diff === -(testimonials.length - 2)) return 2;
    if (diff === -2 || diff === testimonials.length - 2) return -2;
    return 0;
  };

  const getCardClasses = (offset: number) => {
    const base = "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out shadow-sm ";
    
    if (offset === 0) return base + "w-full lg:w-[720px] h-[550px] lg:h-[400px] left-0 lg:left-1/2 lg:-translate-x-1/2 bg-white rounded-[32px] lg:rounded-[40px] z-30 opacity-100 overflow-hidden";
    
    // Left card (Dark) - Angled cut on bottom right, moved further left
    if (offset === -1) return base + "w-full lg:w-[240px] h-[550px] lg:h-[240px] left-[-100%] lg:left-[calc(50%-360px-240px-32px)] lg:translate-x-0 bg-[#230B0B] z-20 opacity-0 lg:opacity-100 cursor-pointer hover:scale-[1.02] [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)] rounded-tl-[32px] rounded-bl-[32px] rounded-tr-[32px]";
    
    // Right card (Yellow) - Angled cut on top left, moved further right
    if (offset === 1) return base + "w-full lg:w-[240px] h-[550px] lg:h-[240px] left-[100%] lg:left-[calc(50%+360px+32px)] lg:translate-x-0 bg-[#FDF08A] z-20 opacity-0 lg:opacity-100 cursor-pointer hover:scale-[1.02] [clip-path:polygon(48px_0,100%_0,100%_100%,0_100%,0_48px)] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px]";
    
    if (offset === -2) return base + "w-[240px] h-[240px] left-[-50%] bg-[#230B0B] rounded-[32px] z-10 opacity-0 pointer-events-none hidden lg:block overflow-hidden";
    
    if (offset === 2) return base + "w-[240px] h-[240px] right-[-50%] bg-[#FDF08A] rounded-[32px] z-10 opacity-0 pointer-events-none hidden lg:block overflow-hidden";
    
    return base + "opacity-0 pointer-events-none hidden overflow-hidden";
  };

  return (
    <section className="bg-[#F2EBE1] text-primary-900 py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
          <h2 className="text-[clamp(2.5rem,10vw,4rem)] leading-[1.1] font-primary font-light">
            What say clients<br />about us
          </h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-tertiary-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#230B0B] text-white flex items-center justify-center hover:bg-primary-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[550px] lg:h-[400px] mt-12">
          {testimonials.map((testimonial, index) => {
            const offset = getOffset(index);
            
            return (
              <div 
                key={testimonial.id}
                className={getCardClasses(offset)}
                onClick={() => {
                  if (offset === -1) prev();
                  if (offset === 1) next();
                }}
              >
                {/* Center Content */}
                <div className={`absolute inset-0 flex flex-col lg:flex-row transition-opacity duration-700 ${offset === 0 ? 'opacity-100 z-10 delay-100' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-full lg:w-[45%] h-[50%] lg:h-full relative">
                    <Image src={testimonial.image} fill className="object-cover" alt={testimonial.name} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-white">
                      <h4 className="text-xl font-medium">{testimonial.name}</h4>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%] h-[50%] lg:h-full p-8 lg:p-10 flex flex-col justify-center relative bg-white">
                    <svg className="w-12 h-12 lg:w-14 lg:h-14 text-gray-100 absolute top-6 left-6 lg:top-8 lg:left-8" viewBox="0 0 44 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 0C6.044 0 0 6.044 0 13.5V36H18V13.5H9C9 8.529 13.029 4.5 18 4.5V0H13.5ZM39.5 0C32.044 0 26 6.044 26 13.5V36H44V13.5H35C35 8.529 39.029 4.5 44 4.5V0H39.5Z" />
                    </svg>
                    <p className="text-lg lg:text-xl font-medium leading-tight text-primary-900 z-10 relative mt-4 lg:mt-6">
                      {testimonial.quote}
                    </p>
                    <div className="absolute bottom-6 right-8 lg:bottom-8 lg:right-10 text-sm font-bold">
                      <span className="text-primary-900">{testimonial.id}</span>
                      <span className="text-primary-900/30"> / {testimonials.length}</span>
                    </div>
                  </div>
                </div>

                {/* Left Content (Dark) */}
                <div className={`absolute inset-0 flex flex-col justify-between p-6 lg:p-8 transition-opacity duration-700 ${offset === -1 ? 'opacity-100 z-10 delay-100' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 relative rounded-2xl overflow-hidden">
                    <Image src={testimonial.avatar} fill className="object-cover" alt={testimonial.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Right Content (Yellow) */}
                <div className={`absolute inset-0 flex flex-col justify-between p-6 lg:p-8 transition-opacity duration-700 ${offset === 1 ? 'opacity-100 z-10 delay-100' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 relative rounded-2xl overflow-hidden self-end">
                    <Image src={testimonial.avatar} fill className="object-cover" alt={testimonial.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-primary-900 font-medium">{testimonial.name}</h4>
                    <p className="text-primary-900/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
