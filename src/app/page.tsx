import Link from 'next/link';
import { getGameConfig, getCurrentMonthYear } from '@/lib/data';
import { buildBreadcrumbSchema, generateFaqSchema } from '@/lib/seo';
import tiers from '@/data/tier-list.json';
import resetSystems from '@/data/calculator-evolution.json';

const config = getGameConfig();

export default function HomePage() {
  const monthYear = getCurrentMonthYear();
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl }
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          🍋 {config.game.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          The Ultimate Guide &amp; Tools — {monthYear}
        </p>
        <p className="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
          Build your lemon empire from a $1 stand to a space station. 
          Evolution calculator, tier list, codes, and beginner guide — all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
          <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full font-bold">
            👥 {config.stats.visits} plays
          </span>
          <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full font-bold">
            ❤️ {config.stats.favorites} favorites
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-bold">
            💤 {config.stats.offlineEarning} offline earning
          </span>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <Link href="/calculator" className="card hover:border-amber-400 transition-colors group">
          <div className="text-3xl mb-3">🧮</div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500">Evolution Calculator</h3>
          <p className="text-sm text-gray-500">Plan your resets — Evolution, Void Evolution, and Ascension timing</p>
        </Link>
        <Link href="/codes" className="card hover:border-amber-400 transition-colors group">
          <div className="text-3xl mb-3">🎁</div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500">Codes</h3>
          <p className="text-sm text-gray-500">Latest working codes and redemption guide</p>
        </Link>
        <Link href="/tier-list" className="card hover:border-amber-400 transition-colors group">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500">Tier List</h3>
          <p className="text-sm text-gray-500">All 8 income tiers ranked from Lemon Stand to Space Station</p>
        </Link>
        <Link href="/beginner-guide" className="card hover:border-amber-400 transition-colors group">
          <div className="text-3xl mb-3">📖</div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500">Beginner Guide</h3>
          <p className="text-sm text-gray-500">From $1 clicker to tycoon — step-by-step progression</p>
        </Link>
        <Link href="/updates" className="card hover:border-amber-400 transition-colors group">
          <div className="text-3xl mb-3">🔄</div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500">Updates</h3>
          <p className="text-sm text-gray-500">Latest patches, new features, and balance changes</p>
        </Link>
        <a 
          href={`https://www.roblox.com/games/${config.game.robloxId}/${config.game.name.replace(/\s+/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="card hover:border-amber-400 transition-colors group"
        >
          <div className="text-3xl mb-3">🎮</div>
          <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500">Play Now</h3>
          <p className="text-sm text-gray-500">Join {config.stats.visits}+ players on Roblox</p>
        </a>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🍋 What Is {config.game.name}?</h2>
        <div className="card">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>{config.game.name}</strong> is a Roblox tycoon/incremental game developed by <strong>{config.game.developer}</strong>. 
            You start with just $1 and a lemon stand, then build a massive lemon empire through:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">1️⃣</span>
              <div>
                <strong>8 Income Tiers</strong> — From Lemon Stand → LemonDash → Lemon Depot → Mountain Skyscraper (4 floors) → Space Station Lemon X
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">2️⃣</span>
              <div>
                <strong>Evolution (Rebirth)</strong> — Reset at $77 Sextillion for Alien Investors (+1% cash per investor permanently)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">3️⃣</span>
              <div>
                <strong>Void Evolution</strong> — At 500 Quadrillion investors, unlock the Purple Portal for 42× multiplicative income boosts
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">4️⃣</span>
              <div>
                <strong>Ascension</strong> — Complete the Space Staircase for a 7.77× cash boost and leaderboard glory
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold mt-0.5">5️⃣</span>
              <div>
                <strong>Sewer Secrets</strong> — Hidden mazes, Sewer Keys, UFO Keys, and the Cosmic Vine (harvest every 4 hours)
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-bold mb-2">How do you make money in Sell Lemons?</h3>
            <p className="text-gray-600 text-sm">
              Click the green button to sell lemons, then invest in automation (Juicer, Cup Stand, Sugar Mixer). 
              Hire managers in priority order: Lily Gumdrop first, then upgrade each income tier before hiring. 
              Your tycoon earns 100% offline income!
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">When should I Evolution (Rebirth)?</h3>
            <p className="text-gray-600 text-sm">
              Wait for at least 200% pending investor bonus (350%+ is the sweet spot). 
              Also follow the 10× rule: only evolve when you'd gain at least 10× your current investor count.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">What is the best Power in Sell Lemons?</h3>
            <p className="text-gray-600 text-sm">
              Remote Buy is the most valuable — it lets you purchase upgrades from the menu without traveling. 
              Costs 1 Trigintillion Alien Investors. Lost on Ascension.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold mb-2">Are there codes for Sell Lemons?</h3>
            <p className="text-gray-600 text-sm">
              As of June 2026, no active codes exist. The developer BloxByte Games may release codes in future updates. 
              Join their Discord for announcements.
            </p>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFaqSchema([
          { question: "How do you make money in Sell Lemons?", answer: "Click the green button to sell lemons, then invest in automation (Juicer, Cup Stand, Sugar Mixer). Hire managers in priority order: Lily Gumdrop first, then upgrade each income tier before hiring. Your tycoon earns 100% offline income!" },
          { question: "When should I Evolution (Rebirth)?", answer: "Wait for at least 200% pending investor bonus (350%+ is the sweet spot). Also follow the 10× rule: only evolve when you'd gain at least 10× your current investor count." },
          { question: "What is the best Power in Sell Lemons?", answer: "Remote Buy is the most valuable — it lets you purchase upgrades from the menu without traveling. Costs 1 Trigintillion Alien Investors. Lost on Ascension." },
          { question: "Are there codes for Sell Lemons?", answer: "As of June 2026, no active codes exist. The developer BloxByte Games may release codes in future updates. Join their Discord for announcements." }
        ]) }} />
      </div>
    </div>
  );
}
