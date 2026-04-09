import Image from 'next/image';
import { Facebook, Send, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#3A2318] text-tertiary-50 pt-16 md:pt-24 pb-8 px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/PGh9ySnH/Gemini-Generated-Image-cd4ntdcd4ntdcd4n-Photoroom.png"
          alt="Glowing skin background"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A2318]/80 via-[#3A2318]/60 to-[#3A2318]/90" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-12 mb-12">
          {/* Col 1: Brand & Contact */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <h3 className="text-4xl font-primary font-light text-[#FDF08A] mb-2">Sparkles</h3>
            <p className="text-sm font-light opacity-80 leading-relaxed">
              12 Admiralty Way<br />
              Lekki Phase 1<br />
              Lagos, Nigeria
            </p>
            <a href="mailto:hello@sparklesskincare.com" className="flex items-center gap-2 text-sm font-light opacity-80 hover:opacity-100 transition-opacity mt-2">
              <Mail className="w-4 h-4" />
              hello@sparklesskincare.com
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-primary font-light mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm font-light opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Our Story</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shop All</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog / Skincare Tips</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Shop By Category */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-primary font-light mb-2">Shop By Category</h4>
            <ul className="flex flex-col gap-3 text-sm font-light opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cleansers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Moisturizers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Face Masks</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Eye Care</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">SPF & Protection</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Skincare Sets</a></li>
            </ul>
          </div>

          {/* Col 4: My Account */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-primary font-light mb-2">My Account</h4>
            <ul className="flex flex-col gap-3 text-sm font-light opacity-80">
              <li><a href="#" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Facebook className="w-4 h-4" /> FaceBook</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Send className="w-4 h-4" /> Telegram</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Twitter className="w-4 h-4" /> Twitter</a></li>
            </ul>
          </div>

          {/* Col 5: Community & More */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-primary font-light mb-2">Community & More</h4>
            <ul className="flex flex-col gap-3 text-sm font-light opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Skincare Quiz</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Invest & CEOs</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Rewards Program</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Massive Text */}
        <div className="w-full flex justify-center overflow-hidden -mb-2 lg:-mb-7">
          <h1 className="text-[clamp(4rem,18vw,317.8px)] leading-none font-primary font-light text-white opacity-[0.15] tracking-tighter select-none">
            Sparkles
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light opacity-80 relative z-10">
          <p>Copyright {currentYear} all rights reserved. Powered by Drimdave.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Security</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity">
            <span className="text-base">🇺🇸</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
