import Layout from "@/components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title">Terms of Service</h1>
        <div className="card">
          <p className="text-gray-300 leading-relaxed mb-4">
            This website is for informational purposes only. All game data, images, and trademarks belong to their respective owners 
            (Roblox Corporation, L0L GAMES).
          </p>
          <p className="text-gray-400 text-sm">
            Last updated: June 20, 2026
          </p>
        </div>
      </div>
    </Layout>
  );
}
