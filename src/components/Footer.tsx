import Link from 'next/link';
import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 mb-1">
              {config.game.name} Guide &amp; Tools — Fan-made companion site. Not affiliated with Roblox or {config.game.developer}.
            </p>
            <p className="text-xs text-gray-400">
              Game data sourced from public Roblox API, Beebom, BloxRon, and community YouTube creators. Updated daily.
            </p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/about" className="hover:text-amber-500 transition-colors">About</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy</Link>
          </nav>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {config.game.name} Guide. All game trademarks belong to their respective owners.
        </div>
      </div>
    </footer>
  );
}
