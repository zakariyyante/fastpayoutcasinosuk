"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky-header border-b border-white/5">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/top3logo.png" 
            alt="Top 3 New Casinos UK" 
            width={200}
            height={45}
            className="object-contain h-auto w-auto max-w-[150px] md:max-w-[200px]"
            priority
          />
        </Link>

        {/* Desktop Nav - Tech Style */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full p-1">
          {["Home", "Brands", "Guide", "About Us", "Contact Us"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Live Status Indicator */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-white uppercase tracking-widest">System Online</span>
            </div>
            <span className="text-[8px] text-white/30 uppercase tracking-[0.2em]">Data Refresh: 42s ago</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a0b2e] border-b border-white/10 p-4 flex flex-col gap-4">
          {["Home", "Brands", "Guide", "About Us", "Contact Us"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium text-white/80 hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
