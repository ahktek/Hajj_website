import Image from "next/image";
import Link from "next/link";

/**
 * Hero Component
 * 
 * TODO: The background image below is currently using a local placeholder.
 * When integrating with Cloudinary/S3, update the `src` attribute of the Next.js
 * Image component to point to your CDN URL. Ensure domains are configured
 * in next.config.mjs if using external URLs.
 */
export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png" // FUTURE: Swap with Cloudinary/S3 URL here
          alt="Kaaba in Mecca during Hajj"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Deep Green Gradient Overlay for readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/90 via-brand-green-900/60 to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight text-brand-gold-300">
          Your Spiritual Journey Begins Here
        </h1>
        <p className="text-lg md:text-2xl font-sans mb-10 text-gray-200 drop-shadow-md">
          Experience a deeply moving, premium Hajj and Umrah package tailored for your absolute peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/packages" className="btn-secondary w-full sm:w-auto text-lg px-8 py-3">
            Explore Packages
          </Link>
          <a href="#pre-register" className="btn-outline border-white text-white hover:bg-white hover:text-brand-green-900 w-full sm:w-auto text-lg px-8 py-3">
            Pre-Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
