import Hero from "@/components/domain/Hero";
import PackageCard from "@/components/domain/PackageCard";
import PreRegForm from "@/components/domain/PreRegForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TrustSignals from "@/components/domain/TrustSignals";
import CallBackForm from "@/components/domain/CallBackForm";
import OfficeInfo from "@/components/domain/OfficeInfo";
import PhotoGallery from "@/components/domain/PhotoGallery";

const packages = [
  {
    id: "economy",
    name: "Economy",
    description: "Budget-friendly spiritual journey with essential comforts.",
    price: 450000,
    features: [
      "Direct Flight",
      "Standard Hotel (1km)",
      "Daily Bengali Meals",
      "Guided Ziyarat",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    description: "Balanced experience with premium locations and service.",
    price: 600000,
    isPopular: true,
    features: [
      "Direct Flight",
      "3-Star Hotel (500m)",
      "Buffet Meals",
      "Guided Ziyarat & Seminars",
      "Hajj Kit Included",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    description: "The ultimate luxury pilgrimage for complete peace of mind.",
    price: 850000,
    features: [
      "Business Class Options",
      "5-Star Hotel (Adjacent)",
      "Premium Buffet",
      "VIP Mina/Arafat Tents",
      "Dedicated Scholar",
    ],
  },
];

export default function Home() {
  return (
    <div className="bg-off-white">
      {/* Hero Section with Ken Burns & CallBack */}
      <div className="relative">
        <Hero />
        <div className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 z-30 w-[450px]">
          <CallBackForm />
        </div>
      </div>

      {/* Trust Signals */}
      <div className="bg-emerald-900 border-y border-gold-500/30">
        <TrustSignals />
      </div>

      {/* Mobile-only Callback */}
      <div className="lg:hidden px-4 py-12 bg-white">
        <CallBackForm />
      </div>

      {/* Packages Grid */}
      <section className="py-24 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-emerald-900 mb-6">Chosen Packages</h2>
          <div className="w-24 h-1.5 bg-gold-500 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {packages.map((pkg, idx) => (
            <PackageCard key={pkg.id} {...pkg} index={idx} />
          ))}
        </div>
      </section>

      {/* Photo Gallery with Snap-Scroll */}
      <PhotoGallery />

      {/* Pre-registration flow */}
      <section id="pre-register" className="py-24 px-4 bg-emerald-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <PreRegForm />
        </div>
      </section>

      {/* Office & Maps */}
      <OfficeInfo />

      <WhatsAppButton />
    </div>
  );
}
