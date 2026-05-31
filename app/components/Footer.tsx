import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-8">
              <Image 
                src="/top3logo.png" 
                alt="Top 3 New Casinos UK" 
                width={240}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-xs text-white/30 leading-relaxed uppercase tracking-widest mb-8">
              The UK&apos;s most trusted source for the latest casino data and independent new brand reviews.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                  {i === 1 ? '𝕏' : i === 2 ? 'fb' : 'ig'}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-[10px] font-bold text-white/40 hover:text-teal-400 uppercase tracking-widest transition-colors">Home</Link>
              <Link href="/brands" className="text-[10px] font-bold text-white/40 hover:text-teal-400 uppercase tracking-widest transition-colors">Top Brands</Link>
              <Link href="/guide" className="text-[10px] font-bold text-white/40 hover:text-teal-400 uppercase tracking-widest transition-colors">Payout Guide</Link>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-[10px] font-bold text-white/40 hover:text-teal-400 uppercase tracking-widest transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] font-bold text-white/40 hover:text-teal-400 uppercase tracking-widest transition-colors">Terms of Service</Link>
              <Link href="/contact-us" className="text-[10px] font-bold text-white/40 hover:text-teal-400 uppercase tracking-widest transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6">Affiliate Disclosure</h4>
            <p className="text-[10px] text-white/20 leading-relaxed uppercase tracking-widest mb-4">
              top3newcasinosuk.org is an independent affiliate site owned and operated by Dana Kichler Peretz (HaAtzmaut Street 12, Sderot, 2422209, Israel).
            </p>
            <p className="text-[10px] text-white/20 leading-relaxed uppercase tracking-widest">
              We receive commissions from the brands featured on this site. Our reviews are based on objective testing and data. Always check the terms and conditions of any offer before signing up.
            </p>
          </div>
        </div>

        {/* Responsible Gambling Logos - Unique Layout */}
        <div className="flex flex-col items-center border-t border-white/5 pt-10">
          <div className="flex flex-wrap justify-center items-center gap-12 mb-10 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Image src="/gambleaware.png" alt="BeGambleAware" width={140} height={33} className="h-6 w-auto" />
            <Image src="/gamcare.png" alt="GamCare" width={100} height={33} className="h-6 w-auto" />
            <Image src="/gamestop.png" alt="GamStop" width={100} height={33} className="h-6 w-auto" />
          </div>
          <div className="text-center">
            <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">
              © {year} top3newcasinosuk.org | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
