"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
}

export default function BrandCard({ brand, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    // Affiliate URLs end with an empty trailing param like clickid= or subid=
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });
    
    // Google Ads conversion tracking
    const win = window as typeof window & { gtag_report_conversion?: () => void };
    if (typeof window !== "undefined" && win.gtag_report_conversion) {
      win.gtag_report_conversion();
    }

    window.open(buildUrl(brand.url, gclid), "_blank");
  };

  return (
    <a 
      href={brand.displayUrl}
      onClick={(e) => {
        e.preventDefault();
        handleCardClick();
      }}
      className="casino-card-bg relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-center no-underline"
    >
      {/* Rating Badge (Top Left) */}
      <div className="absolute top-0 left-0 bg-teal-500 text-black font-black px-3 py-1 text-xs rounded-br-lg z-10">
        {brand.rating.toFixed(1)}
      </div>

      {/* Brand Specific Badge (e.g. TOP PICK) */}
      {brand.badge && (
        <div className="absolute top-0 right-0 bg-accent text-white font-black px-3 py-1 text-[8px] rounded-bl-lg z-10 uppercase tracking-widest">
          {brand.badge}
        </div>
      )}

      {/* Logo Section */}
      <div className="p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 w-full md:w-[30%]">
        <div className="relative w-44 h-22 transform group-hover:scale-105 transition-transform duration-500">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 176px, 176px"
          />
        </div>
      </div>

      {/* Bonus Section */}
      <div className="p-4 flex-grow text-center md:text-left">
        <div className="text-[8px] text-accent font-black uppercase tracking-[0.2em] mb-1">Exclusive Welcome Bonus</div>
        <div className="text-lg md:text-xl font-bold text-white leading-tight">
          {brand.bonus}
        </div>
        <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-3">
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-teal-500"></span>
            <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Instant Payouts</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-teal-500"></span>
            <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">UKGC Licensed</span>
          </div>
        </div>
      </div>

      {/* Rating & CTA Section */}
      <div className="p-4 w-full md:w-[25%] border-t md:border-t-0 md:border-l border-white/5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-4">
          <div className="flex text-teal-400 text-xs mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <div className="text-[9px] text-white/30 uppercase tracking-widest">{brand.votes} VOTES</div>
        </div>
        
        <button 
          className="cta-button w-full py-4 text-lg mb-3"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Play at {brand.name}
        </button>
        <span 
          className="text-[9px] text-white/30 hover:text-white uppercase tracking-[0.2em] transition-colors"
        >
          Visit Website
        </span>
      </div>
    </a>
  );
}
