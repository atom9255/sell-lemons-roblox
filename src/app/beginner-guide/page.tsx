import Link from 'next/link';
import { getCurrentMonthYear, getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema, generateFaqSchema } from '@/lib/seo';

const config = getGameConfig();
const monthYear = getCurrentMonthYear();

export default function BeginnerGuidePage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Beginner Guide', item: `${config.seo.baseUrl}/beginner-guide` }
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          📖 {config.game.name} Beginner Guide — {monthYear}
        </h1>
        <p className="text-gray-500">
          From $1 lemon stand to a galactic citrus empire. Everything you need to know to get started.
        </p>
      </div>

      {/* Getting Started */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">🚀 Getting Started</h2>
        <ol className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">1</span>
            <p><strong>Click the green button</strong> — Each lemon sells for $1. Tap rapidly to build your initial capital.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">2</span>
            <p><strong>Buy the Lemon Stand</strong> — Your first upgrade. Increases base lemon price.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">3</span>
            <p><strong>Hire Lily Gumdrop</strong> — First and most important manager. Hire immediately after buying the Lemon Stand.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">4</span>
            <p><strong>Buy Juicer &amp; Cup Stand</strong> — These raise each lemon sale value significantly.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">5</span>
            <p><strong>Upgrade Sugar Mixer</strong> — Further increases per-sale revenue.</p>
          </li>
        </ol>
      </div>

      {/* Key Strategies */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">💡 Best Strategies</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
            <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">🏆 Priority #1: Unlock Automation Early</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Your first priority should be hiring workers and managers. Automated income sources continue generating Cash without constant interaction.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-1">📈 Priority #2: Invest in New Income Sources</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Unlock businesses like Lemondash and Lemon Depot BEFORE over-upgrading old ones. New income sources usually provide better long-term returns.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
            <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">📱 Priority #3: NPC Phone Deals</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Accept good offers when you need quick Cash, but use the Raise Offer option when the deal seems low. Pushing too hard can cause the NPC to cancel the deal.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-1">🔄 Priority #4: First Evolution ASAP</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Complete your first Rebirth quickly to unlock the Power system. Early Rebirths may feel like a setback, but they significantly improve future runs.
            </p>
          </div>
        </div>
      </div>

      {/* Secret Areas */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">🗝️ Secret Areas</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
            <h3 className="font-bold">🕳️ The Sewer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access via street manholes. Contains 4 hidden mazes with secret keys. Pull all levers to unlock gates protecting valuable rewards. 
              Find the Sewer Key and UFO Key for powerful cash and investor boosts.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
            <h3 className="font-bold">🛸 UFO Key Quest</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completing the sewer maze unlocks the UFO Key, granting a permanent 2× investor bonus. Rejoin the server between keys to avoid bugs.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
            <h3 className="font-bold">🌿 Cosmic Vine</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Harvest every 4 hours for special resources. Unlocks the Cosmic Farmer Badge. One of the most valuable late-game features.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/calculator" className="card hover:border-amber-400 transition-colors group">
          <h3 className="font-bold group-hover:text-amber-500">🧮 Evolution Calculator →</h3>
          <p className="text-sm text-gray-500">Plan your reset timing</p>
        </Link>
        <Link href="/tier-list" className="card hover:border-amber-400 transition-colors group">
          <h3 className="font-bold group-hover:text-amber-500">📊 Tier List →</h3>
          <p className="text-sm text-gray-500">See all 8 income tiers ranked</p>
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFaqSchema([
        { question: "What is the best first purchase in Sell Lemons?", answer: "Buy the Lemon Stand, then immediately hire Lily Gumdrop as your first manager. After that, buy the Juicer and Cup Stand to increase per-sale value." },
        { question: "When should I do my first Evolution?", answer: "Wait for at least 200% pending investor bonus, with 350%+ being the community sweet spot. Follow the 10× rule: only evolve when you'd gain at least 10× your current investor count." },
        { question: "Does Sell Lemons earn money while offline?", answer: "Yes! Once you have workers and managers running, your tycoon generates 100% of your income while offline." }
      ]) }} />
    </div>
  );
}
