export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-teal-500/10 border-l-2 border-teal-500 mb-6">
          <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.2em]">Our Mission</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6">
          ABOUT <span className="teal-text">US</span>
        </h1>
        <p className="text-xl text-white/50 leading-relaxed font-medium">
          The UK&apos;s most transparent and data-driven casino review platform.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="casino-card-bg p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Who We Are</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            fastpayoutcasinosuk.org is a premier independent review platform owned and operated by Dana Kichler Peretz, based in Sderot, Israel.
          </p>
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            Founded by a team of industry experts who were tired of the lack of transparency in the online gambling world, we realized that players value one thing above all else: getting their winnings quickly and safely.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Our team consists of former casino operators, professional players, and data analysts who work together to provide you with the most accurate and up-to-date information.
          </p>
        </div>

        <div className="casino-card-bg p-8 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">What We Do</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            We don&apos;t just write reviews based on marketing materials. We actually sign up, deposit real money, and test the withdrawal process of every casino we list.
          </p>
          <ul className="space-y-3">
            {[
              "Real-money withdrawal testing",
              "Verification of UKGC licenses",
              "Analysis of bonus terms & conditions",
              "Evaluation of customer support quality"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-white/80 uppercase tracking-widest">
                <span className="text-teal-400">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Our Commitment to Safety</h2>
        <p className="text-sm text-white/50 leading-relaxed max-w-2xl mx-auto mb-8 uppercase tracking-widest">
          We are fully committed to promoting responsible gambling. Every brand on our site is strictly regulated by the UK Gambling Commission. We provide tools and resources to help you stay in control of your play.
        </p>
        <div className="mb-8 p-4 border-t border-white/5">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Owned and Operated by Dana Kichler Peretz<br />
            HaAtzmaut Street 12, Sderot, 2422209, Israel
          </p>
        </div>
        <div className="flex justify-center gap-8 opacity-40 grayscale">
          <div className="h-8 w-24 bg-white/10 rounded"></div>
          <div className="h-8 w-24 bg-white/10 rounded"></div>
          <div className="h-8 w-24 bg-white/10 rounded"></div>
        </div>
      </div>
    </div>
  );
}
