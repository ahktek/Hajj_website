import Hero from "@/components/domain/Hero";
import PackageCard from "@/components/domain/PackageCard";
import PreRegForm from "@/components/domain/PreRegForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TrustSignals from "@/components/domain/TrustSignals";
import CallBackForm from "@/components/domain/CallBackForm";
import OfficeInfo from "@/components/domain/OfficeInfo";
import PastPilgrimGallery from "@/components/domain/PastPilgrimGallery";

// Mock data for MVP
const packages = [
  // ... (keeping packages the same for now)
  {
    id: "economy",
    name: "Economy Package",
    type: "HAJJ",
    description: "Budget-friendly package without compromising on spiritual fulfillment.",
    price: 450000,
    features: [
      "Direct Flight (Biman/Saudia)",
      "Standard Hotel (within 1km of Haram)",
      "Daily Meals (Bengali Cuisine)",
      "Guided Ziyarat",
    ],
  },
  {
    id: "silver",
    name: "Silver Package",
    type: "HAJJ",
    description: "Balanced package with better accommodations and closer proximity.",
    price: 600000,
    isPopular: true,
    features: [
      "Direct Flight (Biman/Saudia)",
      "3-Star Hotel (within 500m of Haram)",
      "Buffet Meals",
      "Guided Ziyarat & Seminars",
      "Hajj Kit Provided",
    ],
  },
  {
    id: "gold",
    name: "Gold Package",
    type: "HAJJ",
    description: "Premium luxury package offering ultimate comfort and convenience.",
    price: 850000,
    features: [
      "Business Class Flight Options",
      "5-Star Hotel (Adjacent to Haram)",
      "Premium Buffet Catering",
      "VIP Transport & Tents in Mina",
      "Dedicated Scholar & Guide",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Hero />
        {/* Floating Callback form on Hero for Desktop */}
        <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 z-30 w-[400px]">
          <CallBackForm />
        </div>
      </div>

      <TrustSignals />
      
      {/* Mobile Callback form */}
      <div className="lg:hidden px-4 py-8 bg-brand-gold-50">
        <CallBackForm />
      </div>

      {/* Packages Section */}
      <section className="py-20 px-4 max-w-screen-xl mx-auto bg-gray-50 dark:bg-transparent">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-green-950 dark:text-white mb-4">Hajj & Umrah Packages</h2>
          <div className="w-24 h-1 bg-brand-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the spiritual journey of a lifetime with our carefully curated packages.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </section>

      <PastPilgrimGallery />

      {/* Pre-registration Section */}
      <section className="py-20 px-4 bg-brand-green-950 text-white">
        <div className="max-w-3xl mx-auto">
          <PreRegForm />
        </div>
      </section>

      <OfficeInfo />

      <WhatsAppButton />
    </div>
  );
}
