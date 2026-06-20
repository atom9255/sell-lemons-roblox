import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title">About This Site</h1>
        <div className="card mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Hell Or Heaven Guide</strong> is an independent fan-made resource for players of the Roblox game 
            <em> Hell Or Heaven</em> by L0L GAMES.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our mission is to help players make the most of their experience — from choosing the best game passes 
            to collecting rare badges and staying updated on the latest news.
          </p>
          <p className="text-gray-400 text-sm">
            This site is not affiliated with, endorsed by, or connected to Roblox Corporation or L0L GAMES.
          </p>
        </div>
      </div>
    </Layout>
  );
}
