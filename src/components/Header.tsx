import Link from "next/link";
import { GAME_INFO } from "@/data/gameData";

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">⚖️</span>
            <span className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
              HoH Guide
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/calculator" className="text-gray-300 hover:text-amber-400 transition-colors">Calculator</Link>
            <Link href="/tier-list" className="text-gray-300 hover:text-amber-400 transition-colors">Tier List</Link>
            <Link href="/beginner-guide" className="text-gray-300 hover:text-amber-400 transition-colors">Guide</Link>
            <Link href="/codes" className="text-gray-300 hover:text-amber-400 transition-colors">Codes</Link>
            <Link href="/updates" className="text-gray-300 hover:text-amber-400 transition-colors">Updates</Link>
            <a
              href={GAME_INFO.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Play Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
