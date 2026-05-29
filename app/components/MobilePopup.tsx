"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import { useSearchParams } from "next/navigation";

interface MobilePopupProps {
  brands: Brand[];
}

export default function MobilePopup({ brands }: MobilePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");

  useEffect(() => {
    // Show full-screen modal overlay on load if gclid is present and mobile brands exist
    if (gclid && brands.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid, brands]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f051d] overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Image 
              src="/fastlogo.png" 
              alt="Logo" 
              width={120} 
              height={40} 
              className="object-contain" 
            />
            <span className="text-white font-bold uppercase tracking-tight text-xs">Exclusive Mobile Deals</span>
          </div>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "unset";
            }}
            className="text-white/60 hover:text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">
            Fast Payouts <span className="text-accent">Unlocked</span>
          </h2>
          <p className="text-sm text-white/60">Top-rated UK casinos with rapid withdrawals</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} gclid={gclid || undefined} index={index} />
          ))}
        </div>

        <div className="bg-black/20 rounded-xl p-4 text-center">
          <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">
            18+ | Please Gamble Responsibly | T&Cs Apply
          </p>
        </div>
      </div>
    </div>
  );
}
