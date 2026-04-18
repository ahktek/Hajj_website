import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function DebugPage() {
  let dbStatus = "Checking...";
  let errorDetails = null;
  let leadsCount = 0;

  try {
    // Test 1: Simple query
    leadsCount = await db.lead.count();
    dbStatus = "✅ Connected Successfully!";
  } catch (error: any) {
    dbStatus = "❌ Connection Failed";
    errorDetails = {
      message: error.message,
      code: error.code,
      meta: error.meta,
    };
  }

  // Masked DB URL for safety
  const dbUrl = process.env.DATABASE_URL || "NOT FOUND";
  const maskedUrl = dbUrl.replace(/:([^@]+)@/, ":****@");

  return (
    <div className="p-10 font-sans bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gold-500">System Diagnostic Tool</h1>
      
      <div className="space-y-6">
        <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Database Connection Status</h2>
          <p className={`text-2xl font-mono ${dbStatus.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
            {dbStatus}
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Environment Diagnostics</h2>
          <div className="space-y-2 font-mono text-sm">
            <p><span className="text-gray-400">DATABASE_URL:</span> {maskedUrl}</p>
            <p><span className="text-gray-400">Leads Found:</span> {leadsCount}</p>
            <p><span className="text-gray-400">Node Env:</span> {process.env.NODE_ENV}</p>
          </div>
        </section>

        {errorDetails && (
          <section className="bg-red-900/30 p-6 rounded-2xl border border-red-500/50">
            <h2 className="text-xl font-bold mb-4 text-red-400">Detailed Error Logs</h2>
            <pre className="text-xs bg-black/50 p-4 rounded-xl overflow-auto max-h-96 text-red-300 whitespace-pre-wrap">
              {JSON.stringify(errorDetails, null, 2)}
            </pre>
          </section>
        )}

        <div className="pt-10">
          <a href="/" className="text-gold-500 hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
