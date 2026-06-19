export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-6">Privacy Policy</h1>
      <div className="card space-y-4">
        <p>This site does not collect, store, or share any personal data.</p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>No cookies are used for tracking purposes.</li>
          <li>No analytics or third-party scripts collect user data.</li>
          <li>All content is served statically via Next.js export.</li>
        </ul>
      </div>
    </div>
  );
}
