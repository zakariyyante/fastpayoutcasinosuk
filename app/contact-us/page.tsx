export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl">
      <h1 className="text-4xl font-black text-white mb-8 uppercase italic tracking-tighter text-center">
        Contact <span className="text-accent">Us</span>
      </h1>
      <div className="casino-card-bg p-8">
        <p className="text-white/70 mb-8 text-center">
          Have questions about a casino or our review process? Get in touch with our expert team.
        </p>
        
        <div className="mb-8 p-4 bg-white/[0.02] border border-white/5 rounded-lg text-center">
          <h3 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Company Information</h3>
          <p className="text-[10px] text-white/60 uppercase tracking-widest leading-relaxed">
            Dana Kichler Peretz<br />
            HaAtzmaut Street 12, Sderot, 2422209, Israel
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-white/40 uppercase mb-2">Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-white/40 uppercase mb-2">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-white/40 uppercase mb-2">Message</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none"></textarea>
          </div>
          <button type="button" className="cta-button w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}
