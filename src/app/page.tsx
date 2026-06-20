import Link from "next/link";
import Layout from "@/components/Layout";
import { GAME_INFO, GAME_PASSES, BADGES, KEYWORDS } from "@/data/gameData";

export const metadata = {
  title: "Hell Or Heaven Roblox Guide — Game Passes, Tips & Calculator | HoH Guide",
  description: "Complete guide for Roblox Hell Or Heaven. Find the best game passes, learn how to get to Heaven, calculator for pass values, badge guides, and tips from L0L GAMES.",
  keywords: KEYWORDS.primary.concat(KEYWORDS.secondary),
  openGraph: {
    title: "Hell Or Heaven Roblox Complete Guide",
    description: "Everything you need to know about Hell Or Heaven on Roblox",
    type: "website",
  },
  alternates: {
    canonical: "https://hell-or-heaven-roblox.com/",
  },
};

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-950 to-red-900/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-6xl md:text-8xl mb-6">⚖️</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Hell Or Heaven
              </span>
              <br />
              <span className="text-white">Roblox Guide</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {GAME_INFO.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={GAME_INFO.robloxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8"
              >
                🎮 Play on Roblox
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="card text-center">
                <div className="text-2xl font-bold text-amber-400">{GAME_INFO.visits}</div>
                <div className="text-sm text-gray-500">Visits</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-green-400">{GAME_INFO.rating}</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-blue-400">{GAME_INFO.favorites}</div>
                <div className="text-sm text-gray-500">Favorites</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-purple-400">{GAME_INFO.maxPlayers}</div>
                <div className="text-sm text-gray-500">Max Players</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="section-title text-center">Explore the Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/calculator" className="card card-hover group">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 mb-2">
              Game Pass Value Calculator
            </h3>
            <p className="text-gray-400 text-sm">
              Compare all {GAME_PASSES.length} game passes. Find the best value for your Robux. Calculate cost-per-benefit.
            </p>
          </Link>
          <Link href="/tier-list" className="card card-hover group">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 mb-2">
              Game Pass Tier List
            </h3>
            <p className="text-gray-400 text-sm">
              See which game passes are worth buying. Ranked from S to D tier based on value and utility.
            </p>
          </Link>
          <Link href="/beginner-guide" className="card card-hover group">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 mb-2">
              Beginner&apos;s Guide
            </h3>
            <p className="text-gray-400 text-sm">
              Learn the game mechanics, how to get to Heaven, badge strategies, and tips from experienced players.
            </p>
          </Link>
        </div>
      </section>

      {/* Game Passes Preview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="section-title">Game Passes Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GAME_PASSES.map((pass) => (
            <Link key={pass.id} href="/tier-list" className="card card-hover">
              <div className="flex items-center gap-3">
                <span className={`badge-${pass.tier.toLowerCase()} px-3 py-1 rounded-full text-xs font-bold`}>
                  {pass.tier}
                </span>
                <div>
                  <div className="font-bold text-sm">{pass.name}</div>
                  <div className="text-amber-400 text-sm font-semibold">{pass.price.toLocaleString()} R$</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Badges Preview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="section-title">Badge Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BADGES.map((badge) => (
            <div key={badge.id} className="card">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏅</div>
                <div className="flex-1">
                  <div className="font-bold">{badge.name}</div>
                  <div className="text-sm text-gray-500">
                    {badge.awarded} awarded
                  </div>
                </div>
                <span className={`badge-${badge.rarity === "Rare" ? "rare" : badge.rarity === "Ultra Rare" ? "ultra-rare" : "legendary"} px-2 py-1 rounded-full text-xs font-bold`}>
                  {badge.rarity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="card group">
            <summary className="font-bold cursor-pointer text-amber-400">
              What is Hell Or Heaven on Roblox?
            </summary>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Hell Or Heaven is a Party & Casual game by L0L GAMES where players are judged by God and must convince Him 
              to send them to Heaven instead of Hell. It&apos;s inspired by the popular &quot;Like Or Pass&quot; mechanic.
            </p>
          </details>
          <details className="card group">
            <summary className="font-bold cursor-pointer text-amber-400">
              Are there working codes for Hell Or Heaven?
            </summary>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              As of now, Hell Or Heaven does not have any publicly announced codes. Check our Codes page regularly for updates 
              when the developer releases new codes.
            </p>
          </details>
          <details className="card group">
            <summary className="font-bold cursor-pointer text-amber-400">
              Which game pass is the best value?
            </summary>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              The God V.I.P pass offers the best overall value at 149 R$ with 2x God chance, 2x Rewards, 2x Money, and a chat tag. 
              Check our Tier List and Calculator for detailed comparisons.
            </p>
          </details>
          <details className="card group">
            <summary className="font-bold cursor-pointer text-amber-400">
              How many players can join?
            </summary>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Hell Or Heaven supports up to 12 players per server. The game requires R15 avatar type.
            </p>
          </details>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Hell Or Heaven Roblox Guide",
            url: "https://hell-or-heaven-roblox.com/",
            description: "Complete guide for Roblox Hell Or Heaven game",
            publisher: {
              "@type": "Organization",
              name: "HoH Guide",
            },
          }),
        }}
      />
    </Layout>
  );
}
