export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Hell Or Heaven Guide</h3>
            <p className="text-sm">
              The ultimate guide for Roblox Hell Or Heaven. Game passes, badges, tips, and more.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/calculator" className="hover:text-amber-400 transition-colors">Game Pass Calculator</a></li>
              <li><a href="/tier-list" className="hover:text-amber-400 transition-colors">Tier List</a></li>
              <li><a href="/beginner-guide" className="hover:text-amber-400 transition-colors">Beginner Guide</a></li>
              <li><a href="/codes" className="hover:text-amber-400 transition-colors">Codes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Play Now</h3>
            <a
              href="https://www.roblox.com/games/101685456774656/Hell-Or-Heaven"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 rounded-lg transition-colors"
            >
              Play on Roblox
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2026 Hell Or Heaven Guide. Not affiliated with Roblox Corporation.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-amber-400 transition-colors">Terms</a>
            <a href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="/about" className="hover:text-amber-400 transition-colors">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
