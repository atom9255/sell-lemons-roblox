import { getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();

export default function AboutPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'About', item: `${config.seo.baseUrl}/about` }
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <h1 className="text-3xl font-extrabold mb-6">About This Site</h1>
      <div className="card space-y-4">
        <p>
          This is a fan-made companion site for <strong>{config.game.name}</strong>, a Roblox tycoon game by <strong>{config.game.developer}</strong>.
        </p>
        <p>
          Our goal is to provide the most comprehensive and up-to-date resources for Sell Lemons players:
          evolution calculators, tier rankings, code tracking, and beginner guides.
        </p>
        <p>
          All game data is sourced from the official Roblox API, community wikis (Beebom, BloxRon, Fandom),
          and verified by long-time players. We update our content regularly to reflect the latest game changes.
        </p>
        <p className="text-sm text-gray-500">
          This site is not affiliated with, endorsed by, or connected to Roblox Corporation or {config.game.developer}.
          All game names, logos, and trademarks are property of their respective owners.
        </p>
      </div>
    </div>
  );
}
