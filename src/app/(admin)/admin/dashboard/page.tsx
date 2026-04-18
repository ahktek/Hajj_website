import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Real database counts (mock fallback if db not connected)
  const leadsCount = await db.lead.count().catch(() => 0);
  const regCount = await db.preRegistration.count().catch(() => 0);
  const paymentCount = await db.payment.count().catch(() => 0);

  const stats = [
    { name: "Total Leads", value: leadsCount, icon: "📞", color: "bg-blue-500" },
    { name: "Registrations", value: regCount, icon: "🕋", color: "bg-emerald-600" },
    { name: "Pending Payments", value: paymentCount, icon: "💰", color: "bg-amber-500" },
    { name: "Conversion Rate", value: regCount > 0 ? `${((regCount / (leadsCount || 1)) * 100).toFixed(1)}%` : "0%", icon: "📈", color: "bg-indigo-500" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-emerald-950">Welcome, Administrator</h2>
        <p className="text-gray-500">Here's a snapshot of your Hajj agency performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center text-xl mb-4 shadow-lg`}>
              {stat.icon}
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.name}</p>
            <p className="text-3xl font-bold text-emerald-950 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-emerald-950 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-400 italic">No recent activity found. New leads will appear here automatically.</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-emerald-950 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold-500 transition-all text-sm font-bold text-emerald-900">
              Export Leads CSV
            </button>
            <button className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold-500 transition-all text-sm font-bold text-emerald-900">
              Update Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
