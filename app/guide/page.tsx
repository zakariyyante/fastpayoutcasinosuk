export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-black text-white mb-8 uppercase italic tracking-tighter">
        Fast Payout <span className="text-accent">Guide</span>
      </h1>
      <div className="prose prose-invert max-w-none text-white/70 space-y-6">
        <p>Getting your winnings quickly is a top priority for UK players. Here is our guide to the fastest payout methods.</p>
        <h2 className="text-2xl font-bold text-white">1. E-Wallets (Instant - 24 Hours)</h2>
        <p>PayPal, Neteller, and Skrill are consistently the fastest withdrawal methods.</p>
        <h2 className="text-2xl font-bold text-white">2. Debit Cards with Visa Direct (Under 4 Hours)</h2>
        <p>Many UK banks now support Visa Direct, allowing for near-instant payouts to your debit card.</p>
        <h2 className="text-2xl font-bold text-white">3. Trustly / Open Banking (Instant)</h2>
        <p>Direct bank transfers via Open Banking are becoming the gold standard for speed.</p>
      </div>
    </div>
  );
}
