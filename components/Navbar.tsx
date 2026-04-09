'use client';

import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-8 py-6 md:py-8 flex items-center justify-between text-tertiary-300 font-primary">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden hover:opacity-80 transition-opacity"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" strokeWidth={1.5} />
      </button>

      {/* Left Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10 text-body-small">
        <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
        <Link href="/routines" className="hover:opacity-80 transition-opacity">Routines</Link>
        <Link href="/new-arrivals" className="hover:opacity-80 transition-opacity">New Arrivals</Link>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="text-h3">
          Sparkles
        </Link>
      </div>

      {/* Right Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10 text-body-small">
        <Link href="/how-it-works" className="hover:opacity-80 transition-opacity">How it Works</Link>
        <Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
        <button className="hover:opacity-80 transition-opacity" aria-label="Cart">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <Link 
          href="/login" 
          className="px-8 py-2.5 border border-tertiary-300/40 rounded-full hover:bg-tertiary-300 hover:text-primary-900 transition-colors text-button"
        >
          Login
        </Link>
      </div>

      {/* Mobile Cart (Right side on mobile) */}
      <div className="md:hidden flex items-center">
        <button className="hover:opacity-80 transition-opacity" aria-label="Cart">
          <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary-900 border-t border-tertiary-300/20 p-6 flex flex-col gap-6 md:hidden shadow-xl">
          <Link href="/" className="text-lg hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/routines" className="text-lg hover:opacity-80 transition-opacity">Routines</Link>
          <Link href="/new-arrivals" className="text-lg hover:opacity-80 transition-opacity">New Arrivals</Link>
          <Link href="/how-it-works" className="text-lg hover:opacity-80 transition-opacity">How it Works</Link>
          <Link href="/contact" className="text-lg hover:opacity-80 transition-opacity">Contact</Link>
          <Link 
            href="/login" 
            className="px-8 py-3 border border-tertiary-300/40 rounded-full hover:bg-tertiary-300 hover:text-primary-900 transition-colors text-center mt-2"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
