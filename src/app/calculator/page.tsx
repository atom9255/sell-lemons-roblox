import Layout from "@/components/Layout";
import { GAME_PASSES, GAME_INFO, KEYWORDS } from "@/data/gameData";

export const metadata = {
  title: "Game Pass Value Calculator — Hell Or Heaven Roblox | HoH Guide",
  description: "Calculate the value of each Hell Or Heaven game pass. Compare Robux costs, features, and get recommendations on the best deals.",
  keywords: [...KEYWORDS.primary, "hell or heaven calculator", "roblox game pass value"],
};

interface PassCalc {
  selected: boolean;
  multiplier: number;
}

export default function CalculatorPage() {
  const initialPasses: Record<string, PassCalc> = {};
  GAME_PASSES.forEach((p) => {
    initialPasses[p.id] = { selected: false, multiplier: 1 };
  });

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="section-title">🧮 Game Pass Value Calculator</h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Select the game passes you own or are considering, adjust your expected playtime multiplier, 
          and see the cost-per-benefit comparison.
        </p>

        {/* Calculator Input */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4 text-amber-400">Your Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Expected Play Sessions</label>
              <input
                type="number"
                defaultValue={10}
                min={1}
                max={1000}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Total Robux Budget</label>
              <input
                type="number"
                defaultValue={1000}
                min={0}
                step={10}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Passes Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Game Pass</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Price</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Tier</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Cost/Session*</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {GAME_PASSES.map((pass, idx) => {
                const sessions = 10;
                const perSession = (pass.price / sessions).toFixed(1);
                const recs: Record<string, string> = {
                  S: "🔥 Must Buy",
                  A: "💪 Strong Buy",
                  B: "👍 Good Value",
                  C: "🤔 Consider",
                  D: "❌ Skip",
                };
                return (
                  <tr
                    key={pass.id}
                    className={`border-b border-gray-800/50 ${idx % 2 === 0 ? "bg-gray-900/30" : ""} hover:bg-gray-800/50 transition-colors`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold">{pass.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{pass.description}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-amber-400 font-bold">{pass.price.toLocaleString()} R$</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`badge-${pass.tier.toLowerCase()} px-2 py-1 rounded-full text-xs font-bold`}>
                        {pass.tier}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{perSession} R$</td>
                    <td className="py-3 px-4 text-sm">{recs[pass.tier]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-4">* Based on estimated 10 play sessions</p>

        {/* Budget Planner */}
        <div className="card mt-8">
          <h2 className="text-xl font-bold mb-4 text-amber-400">💰 Budget Planner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-400">149 R$</div>
              <div className="text-sm text-gray-500 mt-1">Best Value Pick</div>
              <div className="text-xs text-gray-400 mt-2">God V.I.P</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-amber-400">463 R$</div>
              <div className="text-sm text-gray-500 mt-1">Top 3 Combined</div>
              <div className="text-xs text-gray-400 mt-2">VIP + Sword + Fire</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-400">5,361 R$</div>
              <div className="text-sm text-gray-500 mt-1">All Passes Total</div>
              <div className="text-xs text-gray-400 mt-2">Complete Collection</div>
            </div>
          </div>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Hell Or Heaven Game Pass Calculator",
              description: "Compare game pass values and find the best deals",
              applicationCategory: "Guide",
              operatingSystem: "Roblox",
            }),
          }}
        />
      </div>
    </Layout>
  );
}
