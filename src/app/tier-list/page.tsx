import Link from 'next/link';
import tierData from '@/data/tier-list.json';
import { getGameConfig, getCurrentMonthYear } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();
const monthYear = getCurrentMonthYear();

const tierColors: Record<string, string> = {
  S: 'bg-red-500/20 text-red-400 border-red-500/40',
  A: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
  B: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  C: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
  D: 'bg-gray-500/20 text-gray-400 border-gray-500/40',
};

export default function TierListPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Tier List', item: `${config.seo.baseUrl}/tier-list` }
  ]);

  const sortedTiers = [...tierData].sort((a, b) => a.level - b.level);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          📊 {config.game.name} Tier List — {monthYear}
        </h1>
        <p className="text-gray-500">
          All 8 income tiers ranked from the humble Lemon Stand to the Space Station.
        </p>
      </div>

      {/* Tier Rankings */}
      <div className="space-y-4 mb-12">
        {sortedTiers.map((tier) => (
          <div key={tier.id} className="card flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${tierColors[tier.tier]}`}>
              {tier.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-bold text-lg">{tier.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded border font-bold ${tierColors[tier.tier]}`}>
                  Tier {tier.tier}
                </span>
                <span className="text-xs text-gray-400">Level {tier.level}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tier.description}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                <div>
                  <span className="text-gray-400">Multiplier:</span>{' '}
                  <span className="font-mono font-bold text-amber-600">{tier.multiplier}</span>
                </div>
                <div>
                  <span className="text-gray-400">Unlock:</span>{' '}
                  <span className="font-semibold">{tier.unlockCondition}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Income Source Strategy */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">💡 Income Strategy</h2>
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>8-tier stacking</strong> — Each income source multiplies the ones below it. 
            The full chain: Lemon Stand → LemonDash → Lemon Depot → Trading → Labs → Republic → Robotics → Space Station Lemon X.
          </p>
          <p>
            <strong>Manager priority:</strong> Buy Lily Gumdrop first, then Juicer, Cup Stand, and Sugar Mixer. 
            Hire managers AFTER upgrading each income tier. Delivery fleet progresses from Bikes → Refrigerated Trucks.
          </p>
          <p>
            <strong>Offline earnings:</strong> 100% of your income continues while offline once you have workers and managers running.
          </p>
        </div>
      </div>

      {/* Internal Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/calculator" className="card hover:border-amber-400 transition-colors group">
          <h3 className="font-bold group-hover:text-amber-500">🧮 Evolution Calculator →</h3>
          <p className="text-sm text-gray-500">Plan when to evolve, void evolve, and ascend</p>
        </Link>
        <Link href="/beginner-guide" className="card hover:border-amber-400 transition-colors group">
          <h3 className="font-bold group-hover:text-amber-500">📖 Beginner Guide →</h3>
          <p className="text-sm text-gray-500">Step-by-step progression from $1 to space station</p>
        </Link>
      </div>
    </div>
  );
}
