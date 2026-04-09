'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    id: 1,
    title: 'Gradient Cylinders on Beige',
    price: 'Starting at $289/mo',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Elegant Foundation',
    price: 'Starting at $289/mo',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Hydrating Serum',
    price: 'Starting at $199/mo',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Vitamin C Booster',
    price: 'Starting at $150/mo',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Night Repair Cream',
    price: 'Starting at $210/mo',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Gentle Cleanser',
    price: 'Starting at $89/mo',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Products() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current?.children || [], {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });

    // Cards animation
    gsap.from(cardsRef.current?.children || [], {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  const scroll = (direction: 'left' | 'right') => {
    if (cardsRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      cardsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="bg-tertiary-50 text-primary-900 py-16 md:py-24 pl-6 md:pl-16 overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between pr-6 md:pr-16 mb-12 md:mb-16 gap-6">
        <h2 className="text-h2 font-primary font-light max-w-sm leading-tight">
          Our best selling<br />Products
        </h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-tertiary-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-primary-900 text-tertiary-50 flex items-center justify-center hover:bg-primary-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Cards Carousel */}
      <div ref={cardsRef} className="flex gap-6 overflow-x-auto pb-12 pr-8 md:pr-16 scrollbar-hide snap-x snap-mandatory">
        
        {/* Hero Card */}
        <div className="min-w-[320px] md:min-w-[380px] h-[520px] relative rounded-3xl overflow-hidden snap-start shrink-0 group">
          <Image 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
            alt="Radiant Glow Serum" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col">
            <h3 className="text-h3 text-white font-light mb-2">
              Radiant Glow<br />Serum
            </h3>
            <p className="text-white/90 text-[13px] mb-6">
              Get and stay glowing with doctor-trusted treatments
            </p>
            <button className="w-full bg-white text-primary-900 py-4 rounded-full text-button hover:bg-tertiary-100 transition-colors">
              See If You Are Eligible
            </button>
          </div>
        </div>

        {/* Product Cards */}
        {products.map((product) => (
          <div key={product.id} className="min-w-[320px] md:min-w-[350px] h-[520px] bg-tertiary-200 rounded-3xl p-4 flex flex-col snap-start shrink-0">
            {/* Badge */}
            <div className="self-start bg-white px-3 py-1.5 rounded-full flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="text-caption text-primary-900">In Stock</span>
            </div>

            {/* Image Container */}
            <div className="relative flex-1 w-full mb-4 rounded-2xl overflow-hidden mix-blend-multiply">
              <Image 
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Info Card */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <h4 className="text-body-large font-primary mb-1">{product.title}</h4>
              <p className="text-body-small text-gray-500 mb-6">{product.price}</p>
              
              <button className="w-full bg-primary-900 text-white py-3.5 rounded-full text-button hover:bg-primary-800 transition-colors mb-4">
                Get Started
              </button>
              
              <a href="#" className="text-caption text-gray-500 border-b border-gray-300 pb-0.5 hover:text-primary-900 hover:border-primary-900 transition-colors">
                Important Safety Information
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
