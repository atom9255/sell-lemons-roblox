import { getCurrentMonthYear, getGameConfig } from '@/lib/data';
import { buildBreadcrumbSchema } from '@/lib/seo';

const config = getGameConfig();
const monthYear = getCurrentMonthYear();

export default function UpdatesPage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Updates', item: `${config.seo.baseUrl}/updates` }
  ]);

  const updates = [
    {
      date: '2026-06-17',
      title: 'Beginner Guide Published on games.gg',
      description: 'Comprehensive beginner guide covering Remote Buy, Evolution, Sewer keys, and Ascension tips published.',
      type: 'guide'
    },
    {
      date: '2026-06-16',
      title: 'BloxByte Games Community Milestone',
      description: 'Sell Lemons reaches 166M+ plays. The BloxByte Games community on Roblox continues to grow with active development.',
      type: 'milestone'
    },
    {
      date: '2026-06-15',
      title: 'BloxRon Wiki Expanded',
      description: 'Detailed wiki covering 8-tier income stacking, manager priority, and the complete infrastructure roadmap published.',
      type: 'wiki'
    },
    {
      date: '2026-06-09',
      title: 'Trading Game Unlocked Feature',
      description: 'Players discovered and documented the Trading Game unlock mechanic, including requirements and strategies.',
      type: 'feature'
    }
  ];

  const typeColors: Record<string, string> = {
    guide: 'tag-green',
    milestone: 'tag-amber',
    wiki: 'tag-green',
    feature: 'tag-amber',
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          🔄 {config.game.name} Updates
        </h1>
        <p className="text-gray-500">Latest news, guides, and community discoveries — {monthYear}</p>
      </div>

      <div className="space-y-4">
        {updates.map((update, idx) => (
          <div key={idx} className="card">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-gray-400">{update.date}</span>
              <span className={`tag ${typeColors[update.type]}`}>{update.type}</span>
            </div>
            <h3 className="font-bold mb-1">{update.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{update.description}</p>
          </div>
        ))}
      </div>

      <div className="card mt-8 bg-slate-50 dark:bg-slate-900/50">
        <p className="text-sm text-gray-500">
          💡 <strong>Stay updated:</strong> Join the{' '}
          <a href="https://discord.com/invite/bloxbyte" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline font-bold">
            {config.game.developer} Discord
          </a>{' '}
          for the latest patch notes, code announcements, and community events.
        </p>
      </div>
    </div>
  );
}
