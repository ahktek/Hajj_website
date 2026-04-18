import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function AdminRegistrations() {
  const registrations = await db.preRegistration.findMany({
    include: {
      user: true,
      package: true,
    },
    orderBy: { createdAt: 'desc' }
  }).catch(() => []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-emerald-950">Pre-Registrations</h2>
          <p className="text-gray-500">Official pilgrim sign-ups for Hajj & Umrah.</p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Pilgrim Name</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Package</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Passport / NID</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {registrations.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-8 py-10 text-center text-gray-400 italic">
                  No registrations yet.
                </td>
              </tr>
            ) : (
              registrations.map((reg) => (
                <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5">
                    <p className="font-bold text-emerald-950">{reg.user.name}</p>
                    <p className="text-xs text-gray-400">{reg.user.phone || reg.user.email}</p>
                  </td>
                  <td className="px-8 py-5">
                    <span className="bg-gold-100 text-gold-800 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                      {reg.package.name}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-600">
                    <p>Pass: {reg.passportNumber}</p>
                    <p>NID: {reg.nidNumber}</p>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${
                      reg.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-emerald-900 hover:text-gold-600 font-bold text-sm">
                      Manage
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
