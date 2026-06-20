import Layout from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="section-title">Privacy Policy</h1>
        <div className="card">
          <p className="text-gray-300 leading-relaxed mb-4">
            We respect your privacy. This site does not collect personal data. We may use analytics to understand 
            site usage, but no personally identifiable information is stored.
          </p>
          <p className="text-gray-400 text-sm">
            Last updated: June 20, 2026
          </p>
        </div>
      </div>
    </Layout>
  );
}
