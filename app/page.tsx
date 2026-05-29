import { brands } from "./data/brands";
import BrandCard from "./components/BrandCard";
import ComplianceBar from "./components/ComplianceBar";
import MobilePopup from "./components/MobilePopup";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const gclid = typeof resolvedSearchParams.gclid === "string" ? resolvedSearchParams.gclid : undefined;
  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <>
      <Suspense>
        <MobilePopup brands={mobileBrands} />
      </Suspense>

      {/* Hero Section - Clean Unique Design */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-white/5">
        {/* Background Grid & Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(0,206,209,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-teal-500/10 border-l-2 border-teal-500 mb-8">
              <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.2em]">Verified Payout Speeds: 2026</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
              THE <span className="teal-text">FASTEST</span><br />
              <span className="relative">
                PAYOUTS
                <span className="absolute -right-12 top-0 text-[10px] font-mono text-teal-500/40 rotate-90 tracking-widest hidden md:block">LIVE_DATA</span>
              </span><br />
              <span className="gold-text">IN THE UK</span>
            </h1>

            <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              We don&apos;t just review casinos. We test their withdrawal systems with real money every 24 hours. If they don&apos;t pay out in under 1 hour, they don&apos;t make our top list.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">12,402 Active Players Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Cards Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 mb-12">
            {brands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} gclid={gclid} index={index} />
            ))}
          </div>
          
          <ComplianceBar />
        </div>
      </section>

      {/* About / How We Rate Section */}
      <section className="py-24 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-teal-500/10 border-l-2 border-teal-500 mb-6">
              <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.2em]">Our Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
              HOW WE RATE <span className="gold-text">CASINO</span> SITES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="casino-card-bg p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black text-white">♠</span>
              </div>
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tight flex items-center gap-3">
                <span className="teal-text">01.</span> Why Our Reviews Stand Out
              </h3>
              <ul className="space-y-6">
                {[
                  "Real-money testing for withdrawal speeds",
                  "Verification of UKGC license and security",
                  "Analysis of bonus terms and wagering requirements",
                  "Evaluation of game variety and provider quality",
                  "Customer support responsiveness testing"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-[11px] font-bold text-white/60 uppercase tracking-widest leading-relaxed">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="casino-card-bg p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black text-white">♥</span>
              </div>
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tight flex items-center gap-3">
                <span className="teal-text">02.</span> Responsible Gambling
              </h3>
              <p className="text-[11px] text-white/40 mb-10 leading-relaxed uppercase tracking-widest">
                We are committed to promoting responsible gambling. All casinos listed on our site are regulated by the UK Gambling Commission and offer tools to help you stay in control.
              </p>
              <div className="flex flex-col gap-4">
                <a href="https://www.gamstop.co.uk" className="bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] p-4 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all flex justify-between items-center group/link" target="_blank">
                  GAMSTOP - Self-Exclusion <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="https://www.gamcare.org.uk" className="bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] p-4 rounded-xl text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all flex justify-between items-center group/link" target="_blank">
                  GamCare Support <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
