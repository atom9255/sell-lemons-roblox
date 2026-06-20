import Layout from "@/components/Layout";
import { GAME_INFO, BADGES, KEYWORDS } from "@/data/gameData";

export const metadata = {
  title: "Beginner's Guide — Hell Or Heaven Roblox (2026)",
  description: "Complete beginner guide for Hell Or Heaven Roblox. Learn game mechanics, how to get to Heaven, badge strategies, and tips from experienced players.",
  keywords: [...KEYWORDS.primary, "hell or heaven beginner guide", "how to play roblox hell heaven"],
};

export default function BeginnerGuidePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title">📖 Beginner&apos;s Guide</h1>
        
        {/* What is the game */}
        <div className="card mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">What is Hell Or Heaven?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hell Or Heaven is a Party & Casual game on Roblox created by <strong>L0L GAMES</strong>. 
            The core concept draws inspiration from the popular &quot;Like Or Pass&quot; format, but adds a unique 
            divine judgment theme.
          </p>
          <p className="text-gray-300 leading-relaxed">
            In the game, you play as someone standing trial before <strong>God</strong>, trying to convince 
            the divine judge that you deserve to go to <span className="text-blue-400 font-bold">Heaven</span> 
            rather than <span className="text-red-400 font-bold">Hell</span>. Your fate depends on the votes 
            of other players in the server.
          </p>
        </div>

        {/* How to play */}
        <div className="card mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">How to Play</h2>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <strong className="text-white">Join a Server</strong>
                <p className="text-gray-400 text-sm">Each server holds up to 12 players. The game runs in real-time with voting mechanics.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <strong className="text-white">Present Your Case</strong>
                <p className="text-gray-400 text-sm">As a player on trial, you need to make your argument for why you deserve Heaven. Other players vote on your fate.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <strong className="text-white">Vote & Judge</strong>
                <p className="text-gray-400 text-sm">When it&apos;s not your turn, you vote for other players. The majority decides who goes to Heaven and who goes to Hell.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <strong className="text-white">Earn Rewards</strong>
                <p className="text-gray-400 text-sm">Winning a judgment round earns you in-game rewards. Collect badges and unlock achievements.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Tips */}
        <div className="card mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Pro Tips</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <span className="text-xl">🎯</span>
              <div>
                <strong className="text-white">Be Entertaining</strong>
                <p className="text-gray-400 text-sm">Players vote for fun and engaging personalities. Make your case memorable!</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <span className="text-xl">⚔️</span>
              <div>
                <strong className="text-white">Invest in Game Passes Wisely</strong>
                <p className="text-gray-400 text-sm">Check our Tier List to find the best value game passes. God V.I.P (149 R$) is the best starter purchase.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <span className="text-xl">🏅</span>
              <div>
                <strong className="text-white">Collect Badges</strong>
                <p className="text-gray-400 text-sm">The &quot;Heavenly Havoc&quot; badge requires completing the obby — it&apos;s rare (only 94K awarded)!</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
              <span className="text-xl">🔄</span>
              <div>
                <strong className="text-white">Play Consistently</strong>
                <p className="text-gray-400 text-sm">Average playtime is 8.76 minutes. Each round is quick, making it perfect for short gaming sessions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Guide */}
        <div className="card mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Badge Guide</h2>
          <p className="text-gray-400 mb-4">There are 5 badges to collect. Here&apos;s what each one means:</p>
          <div className="space-y-3">
            {BADGES.map((badge) => (
              <div key={badge.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg">
                <span className="text-2xl">🏅</span>
                <div className="flex-1">
                  <div className="font-bold">{badge.name}</div>
                  <div className="text-sm text-gray-400">{badge.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{badge.awarded} awarded</div>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    badge.rarity === "Ultra Rare" ? "bg-amber-400 text-black" :
                    badge.rarity === "Rare" ? "bg-indigo-500 text-white" :
                    "bg-gray-600 text-white"
                  }`}>
                    {badge.rarity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Stats */}
        <div className="card mb-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Game Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-amber-400">{GAME_INFO.visits}</div>
              <div className="text-xs text-gray-500">Total Visits</div>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{GAME_INFO.rating}</div>
              <div className="text-xs text-gray-500">Like Rating</div>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{GAME_INFO.maxPlayers}</div>
              <div className="text-xs text-gray-500">Max Players</div>
            </div>
            <div className="text-center p-3 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">{GAME_INFO.avgPlaytime}</div>
              <div className="text-xs text-gray-500">Avg Playtime</div>
            </div>
          </div>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Hell Or Heaven Roblox Beginner's Guide 2026",
              description: "Complete guide for new players including game mechanics, tips, and badge collection strategies",
              author: { "@type": "Organization", name: "HoH Guide" },
              datePublished: "2026-01-01",
              dateModified: "2026-06-20",
            }),
          }}
        />
      </div>
    </Layout>
  );
}
