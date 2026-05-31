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
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto">
      <div className="p-3">
        <div className="flex justify-center items-center mb-4">
          <div className="flex items-center gap-2">
            <Image 
              src="/top3logo.png" 
              alt="Logo" 
              width={100} 
              height={32} 
              className="object-contain" 
            />
            <span className="text-white font-bold uppercase tracking-tight text-[10px]">Exclusive Mobile Deals</span>
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="text-xl font-black text-white mb-1 uppercase italic tracking-tighter">
            Top 3 <span className="text-accent">Unlocked</span>
          </h2>
          <p className="text-xs text-white/60">Top-rated UK casinos with the best offers</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} gclid={gclid || undefined} />
          ))}
        </div>

        <div className="bg-black/20 rounded-xl p-3 text-center">
          <p className="text-[8px] text-white/30 leading-relaxed uppercase tracking-widest">
            18+ | Please Gamble Responsibly | T&Cs Apply
          </p>
        </div>
      </div>
    </div>
  );
}
