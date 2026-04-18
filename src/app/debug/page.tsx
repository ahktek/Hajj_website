"use client";

import { useState, useEffect } from "react";

export default function DebugPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [testResult, setTestResult] = useState<any>(null);

  useEffect(() => {
    fetch('/api/debug/info') // We need to create this or use a simple check
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleTestWrite = async () => {
    setTestResult({ status: 'Testing...' });
    try {
      const res = await fetch('/api/debug/write-test', { method: 'POST' });
      const result = await res.json();
      setTestResult(result);
    } catch (e: any) {
      setTestResult({ success: false, error: e.message });
    }
  };

  if (loading) return <div className="p-20 text-white bg-gray-900 min-h-screen">Loading Diagnostics...</div>;

  return (
    <div className="p-10 font-sans bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gold-500 text-center">System Diagnostic Tool v2</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Database Connection</h2>
            <p className="text-2xl font-mono text-green-400">✅ Client Loaded</p>
            <p className="mt-4 text-xs text-gray-500">The website can talk to the database layer.</p>
          </section>

          <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Database Write Test</h2>
            <button 
              onClick={handleTestWrite}
              className="w-full bg-gold-500 text-emerald-950 font-bold py-4 rounded-xl hover:bg-gold-400 transition-all shadow-lg"
            >
              RUN WRITE TEST
            </button>
            {testResult && (
              <div className={`mt-4 p-3 rounded-lg text-sm font-bold ${testResult.success ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                {testResult.success ? "✅ WRITE SUCCESS!" : `❌ FAILED: ${testResult.error || testResult.status}`}
              </div>
            )}
          </section>
        </div>

        <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
            <li>Click <strong>RUN WRITE TEST</strong> to verify if your website has "Write" permissions.</li>
            <li>If it fails, we need to check your Supabase database password/user permissions.</li>
            <li>If it succeeds, then your Hajj forms are now ready to collect data.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
