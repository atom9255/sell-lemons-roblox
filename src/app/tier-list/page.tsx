import Layout from "@/components/Layout";
import { GAME_PASSES, KEYWORDS } from "@/data/gameData";

export const metadata = {
  title: "Game Pass Tier List — Hell Or Heaven Roblox (2026)",
  description: "Ranking of all Hell Or Heaven game passes from S to D tier. Find out which weapons and boosts are worth your Robux.",
  keywords: [...KEYWORDS.primary, "hell or heaven tier list", "best game pass roblox"],
};

const TIER_ORDER = ["S", "A", "B", "C", "D"];
const TIER_COLORS: Record<string, string> = {
  S: "from-red-600 to-red-800 border-red-500",
  A: "from-orange-500 to-orange-700 border-orange-400",
  B: "from-yellow-500 to-yellow-700 border-yellow-400",
  C: "from-blue-500 to-blue-700 border-blue-400",
  D: "from-gray-600 to-gray-800 border-gray-500",
};
const TIER_LABELS: Record<string, string> = {
  S: "🔥 God Tier — Must Have",
  A: "💪 Strong — Highly Recommended",
  B: "👍 Good — Solid Choice",
  C: "🤔 Decent — Situational",
  D: "⚠️ Weak — Skip Unless You Want It",
};

export default function TierListPage() {
  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    passes: GAME_PASSES.filter((p) => p.tier === tier),
  }));

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="section-title">🏆 Game Pass Tier List</h1>
        <p className="text-gray-400 mb-10 max-w-2xl">
          We rank all {GAME_PASSES.length} game passes for Hell Or Heaven based on value, utility, and performance. 
          Updated for 2026.
        </p>

        {grouped.map(({ tier, passes }) => (
          <div key={tier} className="mb-8">
            <div className={`bg-gradient-to-r ${TIER_COLORS[tier]} border rounded-xl px-6 py-3 mb-4`}>
              <h2 className="text-xl font-bold">{TIER_LABELS[tier]}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {passes.map((pass) => (
                <div key={pass.id} className="card hover:border-amber-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">⚔️</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{pass.name}</h3>
                        <span className={`badge-${pass.tier.toLowerCase()} px-2 py-0.5 rounded text-xs font-bold`}>
                          {pass.tier}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{pass.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-bold text-lg">
                          {pass.price.toLocaleString()} R$
                        </span>
                        <span className="text-xs text-gray-500">
                          {(pass.price / 10).toFixed(0)}¢ USD approx.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {passes.length === 0 && (
                <div className="card opacity-50">
                  <p className="text-gray-500 text-center py-4">No passes in this tier yet</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Hell Or Heaven Game Pass Tier List",
              description: "Ranking of all game passes by value and utility",
              numberOfItems: GAME_PASSES.length,
              itemListElement: GAME_PASSES.map((pass, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Product",
                  name: pass.name,
                  description: pass.description,
                  offers: {
                    "@type": "Offer",
                    price: pass.price,
                    priceCurrency: "BRL",
                  },
                },
              })),
            }),
          }}
        />
      </div>
    </Layout>
  );
}
