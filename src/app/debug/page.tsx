import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function DebugPage() {
  let dbStatus = "Checking...";
  let errorDetails = null;
  let leadsCount = 0;

  try {
    leadsCount = await db.lead.count();
    dbStatus = "✅ Connected Successfully!";
  } catch (error: any) {
    dbStatus = "❌ Connection Failed";
    errorDetails = { message: error.message, code: error.code };
  }

  // Server Action to test write
  async function testWrite() {
    "use server";
    try {
      await db.lead.create({
        data: {
          name: "Test User " + new Date().toLocaleTimeString(),
          phone: "01712345678",
          type: "DEBUG",
          tags: ["Test"],
        }
      });
      revalidatePath('/debug');
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  }

  const dbUrl = process.env.DATABASE_URL || "NOT FOUND";
  const maskedUrl = dbUrl.replace(/:([^@]+)@/, ":****@");

  return (
    <div className="p-10 font-sans bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gold-500 text-center">System Diagnostic Tool</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-xl font-bold mb-4">Database Read Status</h2>
            <p className={`text-2xl font-mono ${dbStatus.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
              {dbStatus}
            </p>
            <p className="mt-2 text-sm text-gray-400">Total Leads in DB: <span className="text-white font-bold">{leadsCount}</span></p>
          </section>

          <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">Database Write Test</h2>
            <form action={testWrite}>
              <button type="submit" className="w-full bg-gold-500 text-emerald-950 font-bold py-4 rounded-xl hover:bg-gold-400 transition-all shadow-lg active:scale-95">
                SUBMIT TEST LEAD
              </button>
            </form>
            <p className="mt-2 text-[10px] text-gray-500 text-center uppercase tracking-widest">Click to test if writing data works</p>
          </section>
        </div>

        <section className="bg-gray-800 p-6 rounded-2xl border border-gray-700 font-mono text-sm overflow-hidden">
          <h2 className="text-xl font-bold mb-4">Connection Config</h2>
          <p className="break-all opacity-80">{maskedUrl}</p>
        </section>

        {errorDetails && (
          <section className="bg-red-900/30 p-6 rounded-2xl border border-red-500/50">
            <h2 className="text-xl font-bold mb-4 text-red-400">Error Stack Trace</h2>
            <pre className="text-xs bg-black/50 p-4 rounded-xl overflow-auto text-red-300 whitespace-pre-wrap">
              {JSON.stringify(errorDetails, null, 2)}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
}
