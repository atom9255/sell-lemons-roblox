import Link from 'next/link';
import codesData from '@/data/codes.json';
import { getCurrentMonthYear, getGameConfig, getLastUpdated } from '@/lib/data';
import { buildBreadcrumbSchema, generateFaqSchema } from '@/lib/seo';

const config = getGameConfig();
const monthYear = getCurrentMonthYear();

export default function CodesPage() {
  const activeCodes = codesData.filter((c: { status: string }) => c.status === 'active');
  const expiredCodes = codesData.filter((c: { status: string }) => c.status !== 'active');
  const lastUpdated = getLastUpdated();
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', item: config.seo.baseUrl },
    { name: 'Codes', item: `${config.seo.baseUrl}/codes` }
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          🎁 {config.game.name} Codes — {monthYear}
        </h1>
        <p className="text-gray-500">
          Last updated: {lastUpdated}. All working and expired codes in one place.
        </p>
      </div>

      {/* Active Codes */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="tag tag-green">ACTIVE</span>
          Working Codes
        </h2>
        {activeCodes.length > 0 ? (
          <div className="space-y-3">
            {activeCodes.map((code: { code: string; reward: string; addedDate: string; isNew?: boolean }, idx: number) => (
              <div key={idx} className="card border-l-4 border-emerald-500">
                <div className="flex items-center justify-between">
                  <div>
                    <code className="text-lg font-mono font-bold text-emerald-700 dark:text-emerald-400">{code.code}</code>
                    {code.isNew && <span className="ml-2 tag tag-green">NEW</span>}
                  </div>
                  <span className="text-sm text-gray-500">{code.addedDate}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{code.reward}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="card bg-slate-50 dark:bg-slate-900/50">
            <p className="text-gray-600 dark:text-gray-400">
              No active codes available as of {lastUpdated}. Codes are typically released by{' '}
              <strong>{config.game.developer}</strong> through their{' '}
              <a href="https://discord.com/invite/bloxbyte" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">
                Discord server
              </a>{' '}
              or social media during major updates and milestones.
            </p>
          </div>
        )}
      </div>

      {/* Expired Codes */}
      {expiredCodes.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="tag tag-red">EXPIRED</span>
            Expired Codes
          </h2>
          <div className="space-y-2">
            {expiredCodes.map((code: { code: string; reward: string }, idx: number) => (
              <div key={idx} className="card opacity-60">
                <div className="flex items-center justify-between">
                  <code className="text-lg font-mono font-bold line-through">{code.code}</code>
                </div>
                <p className="text-sm text-gray-500 mt-1">{code.reward}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How to Redeem */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">📋 How to Redeem Codes</h2>
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-sm">Open <strong>Sell Lemons</strong> on Roblox</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-sm">Look for the <strong>Twitter/Discord icon</strong> on your screen (usually near the shop)</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-sm">Click the icon to open the code redemption window</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">4</span>
            <p className="text-sm">Type or paste the code exactly as shown (codes are case-sensitive)</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">5</span>
            <p className="text-sm">Click <strong>Redeem</strong> and collect your rewards!</p>
          </li>
        </ol>
      </div>

      {/* Stay Updated */}
      <div className="card bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
        <h3 className="font-bold mb-2">🔔 Stay Updated</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Join the <a href="https://discord.com/invite/bloxbyte" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline font-bold">{config.game.developer} Discord</a> for instant code announcements. 
          New codes are usually released during major updates and player milestones.
        </p>
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFaqSchema([
        { question: "How do I redeem codes in Sell Lemons?", answer: "Open Sell Lemons on Roblox, find the Twitter/Discord icon on screen, click it to open the code window, type the code exactly as shown, and click Redeem." },
        { question: "Are there active codes for Sell Lemons in 2026?", answer: "As of June 2026, no active codes exist. Check the BloxByte Games Discord for new code releases." },
        { question: "Why is my code not working?", answer: "Codes may have expired, be case-sensitive, or require a specific game update version. Always check the date listed with the code." }
      ]) }} />
    </div>
  );
}
