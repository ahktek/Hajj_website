import { db } from "@/lib/db";
import { downloadCSV } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function AdminLeads() {
  const leads = await db.lead.findMany({
    orderBy: { createdAt: 'desc' }
  }).catch(() => []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-emerald-950">Callback Leads</h2>
          <p className="text-gray-500">People who requested a call back via the website.</p>
        </div>
        <button className="btn-secondary px-6">
          Download CSV
        </button>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Name</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Tags</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-8 py-10 text-center text-gray-400 italic">
                  No leads yet. They will appear here when users submit the callback form.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-emerald-950">{lead.name}</td>
                  <td className="px-8 py-5 text-emerald-900">{lead.phone}</td>
                  <td className="px-8 py-5 text-sm text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td className="px-8 py-5">
                    {lead.tags.map(tag => (
                      <span key={tag} className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-md mr-1 uppercase">
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-emerald-900 hover:text-gold-600 font-bold text-sm">
                      Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
