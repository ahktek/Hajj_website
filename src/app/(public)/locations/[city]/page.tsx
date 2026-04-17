import React from 'react';
import Hero from "@/components/domain/Hero";
import TrustSignals from "@/components/domain/TrustSignals";
import CallBackForm from "@/components/domain/CallBackForm";

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityParam } = await params;
  const city = cityParam.charAt(0).toUpperCase() + cityParam.slice(1);

  return (
    <div>
      <div className="bg-brand-green-900 py-12 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">Best Hajj & Umrah Agency in {city}</h1>
        <p className="text-lg text-brand-gold-300">Serving the pilgrims of {city} with excellence and trust.</p>
      </div>

      <div className="relative">
        <Hero />
        <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 z-30 w-[400px]">
          <CallBackForm />
        </div>
      </div>

      <TrustSignals />

      <section className="py-20 px-4 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-green-950 mb-6">Why {city} Pilgrims Choose Al Haramain?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-brand-gold-500 font-bold">✓</span>
                <span>Dedicated support center for {city} residents.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold-500 font-bold">✓</span>
                <span>Pre-Hajj training seminars held locally in {city}.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold-500 font-bold">✓</span>
                <span>Group departures from {city} airport (if applicable).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold-500 font-bold">✓</span>
                <span>Home document collection service available in {city}.</span>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <CallBackForm />
          </div>
        </div>
      </section>
    </div>
  );
}
