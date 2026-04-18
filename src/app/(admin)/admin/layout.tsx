"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/admin/dashboard", icon: "📊" },
    { name: "Leads (Callbacks)", href: "/admin/leads", icon: "📞" },
    { name: "Registrations", href: "/admin/registrations", icon: "🕋" },
    { name: "Payments", href: "/admin/payments", icon: "💰" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-950 text-white flex flex-col shadow-xl">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-serif font-bold text-gold-500">Al Haramain CMS</h1>
          <p className="text-xs text-white/50 mt-1">Admin Management Console</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname === item.href 
                ? "bg-gold-500 text-emerald-950 font-bold shadow-lg" 
                : "hover:bg-white/5 text-white/80"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/" className="text-xs text-white/40 hover:text-white transition-colors">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
