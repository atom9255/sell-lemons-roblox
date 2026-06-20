import Layout from "@/components/Layout";
import { KEYWORDS } from "@/data/gameData";

export const metadata = {
  title: "Latest Updates — Hell Or Heaven Roblox",
  description: "Stay up to date with the latest Hell Or Heaven Roblox updates, new game passes, badges, and events.",
  keywords: [...KEYWORDS.primary, "hell or heaven updates", "roblox game updates 2026"],
};

export default function UpdatesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title">📰 Latest Updates</h1>
        
        <div className="space-y-6">
          {[
            {
              date: "June 2026",
              title: "Game continues to grow with 181M+ visits",
              content: "Hell Or Heaven remains one of the most popular Party & Casual games on Roblox with over 92K favorites and an 81.2% rating.",
            },
            {
              date: "February 2026",
              title: "Last major update",
              content: "The game received a significant update. Developer L0L GAMES continues to maintain and improve the experience.",
            },
            {
              date: "November 2024",
              title: "Game Launch",
              content: "Hell Or Heaven was created by L0L GAMES on November 11, 2024. Since launch, it has rapidly grown to become a top Party & Casual experience.",
            },
          ].map((update, i) => (
            <div key={i} className="card">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 font-bold px-3 py-1 rounded text-sm whitespace-nowrap">
                  {update.date}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{update.title}</h3>
                  <p className="text-gray-400 text-sm">{update.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Hell Or Heaven Updates",
              description: "Latest news and updates for Roblox Hell Or Heaven",
            }),
          }}
        />
      </div>
    </Layout>
  );
}
