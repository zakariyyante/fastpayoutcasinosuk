import Link from "next/link";

export default function ComplianceBar() {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-red-500/20 flex items-center justify-center text-red-500 font-black text-xl">
            18+
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Responsible Gambling</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed max-w-md">
              Gamble responsibly. For help, visit <span className="text-teal-400">BeGambleAware.org</span> or call 0808 8020 133.
            </p>
          </div>
        </div>
        <Link 
          href="https://www.begambleaware.org" 
          className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/5 transition-colors"
          target="_blank"
        >
          Get Support Now
        </Link>
      </div>
    </div>
  );
}
