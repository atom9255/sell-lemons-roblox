import Layout from "@/components/Layout";
import { KEYWORDS } from "@/data/gameData";

export const metadata = {
  title: "Working Codes — Hell Or Heaven Roblox (June 2026)",
  description: "Latest working codes for Hell Or Heaven Roblox. Get free rewards, game passes, and exclusive items.",
  keywords: [...KEYWORDS.primary, "hell or heaven codes", "roblox codes 2026"],
};

export default function CodesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title">🎫 Working Codes</h1>
        
        <div className="card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚠️</span>
            <h2 className="text-xl font-bold text-amber-400">No Codes Available Yet</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            As of June 2026, <strong>L0L GAMES</strong> has not released any public codes for Hell Or Heaven. 
            This page will be updated as soon as codes are announced.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            💡 Tip: Follow the developer&apos;s Roblox group or enable notifications in-game to be the first to know 
            when codes drop.
          </p>
        </div>

        {/* How to redeem */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-amber-400 mb-4">How to Redeem Codes</h2>
          <ol className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span>Open Hell Or Heaven on Roblox</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span>Look for the codes button (usually a Twitter/X icon on the screen)</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span>Type or paste the code carefully (codes are case-sensitive)</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span>Press &quot;Redeem&quot; and claim your rewards!</span>
            </li>
          </ol>
        </div>

        {/* Where codes are announced */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-amber-400 mb-4">Where to Find New Codes</h2>
          <div className="space-y-2 text-gray-300">
            <p>🐦 <strong>Twitter/X</strong> — Developers often announce codes on their official Twitter</p>
            <p>📺 <strong>YouTube</strong> — Check popular Hell Or Heaven content creators</p>
            <p>👥 <strong>Roblox Group</strong> — Join L0L GAMES&apos; Roblox group for announcements</p>
            <p>📰 <strong>Game Guides</strong> — Sites like Pro Game Guides, Beebom, and PCGamesN update codes regularly</p>
          </div>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Hell Or Heaven Roblox Codes",
              description: "Working promo codes for free rewards in Hell Or Heaven",
              datePublished: "2026-06-20",
            }),
          }}
        />
      </div>
    </Layout>
  );
}
