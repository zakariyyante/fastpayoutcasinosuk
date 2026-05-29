"use client";

import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  index: number;
}

export default function BrandCard({ brand, gclid, index }: BrandCardProps) {
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
    <div 
      onClick={handleCardClick}
      className="casino-card-bg relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-center"
    >
      {/* Ranking Badge */}
      <div className="absolute top-0 left-0 bg-teal-500 text-black font-black px-3 py-1 text-xs rounded-br-lg z-10">
        #{index + 1}
      </div>

      {/* Logo Section */}
      <div className="p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 w-full md:w-1/4">
        <div className="relative w-32 h-16 mb-4">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 128px, 128px"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-black text-white mb-1">{brand.rating.toFixed(1)}</div>
          <div className="flex text-teal-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <div className="text-[9px] text-white/30 mt-1 uppercase tracking-widest">{brand.votes} VOTES</div>
        </div>
      </div>

      {/* Bonus Section */}
      <div className="p-8 flex-grow text-center md:text-left">
        <div className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mb-2">Exclusive Welcome Bonus</div>
        <div className="text-xl md:text-2xl font-bold text-white leading-tight">
          {brand.bonus}
        </div>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-teal-500"></span>
            <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Instant Payouts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-teal-500"></span>
            <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">UKGC Licensed</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-6 w-full md:w-1/4 border-t md:border-t-0 md:border-l border-white/5 flex flex-col items-center">
        <button 
          className="cta-button w-full mb-3"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Claim Offer
        </button>
        <Link 
          href={brand.url} 
          className="text-[9px] text-white/30 hover:text-white uppercase tracking-[0.2em] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
}
