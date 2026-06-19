export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-6">Terms of Service</h1>
      <div className="card space-y-4">
        <p>By using this site, you agree to the following terms:</p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>This is a fan-made site and is not affiliated with Roblox Corporation or the game developers.</li>
          <li>All game data is provided for informational purposes only.</li>
          <li>We make no warranties about the accuracy or completeness of the information.</li>
          <li>Links to external sites (YouTube, Discord, Roblox) are provided for convenience.</li>
        </ul>
      </div>
    </div>
  );
}
