import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Haramain Hajj - Premium Hajj & Umrah Packages",
  description: "Experience a spiritual journey with Al Haramain Hajj. We offer premium, trustworthy Hajj and Umrah packages from Bangladesh. Govt Approved License No: 1234/BD.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Al Haramain Hajj",
  "image": "https://alharamainhajj.com/logo.png",
  "@id": "",
  "url": "https://alharamainhajj.com",
  "telephone": "+8801711223344",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House #12, Road #4, Sector #3, Uttara",
    "addressLocality": "Dhaka",
    "postalCode": "1230",
    "addressCountry": "BD"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.8705,
    "longitude": 90.3958
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-brand-green-950 text-white py-8 text-center mt-auto">
          <p>&copy; {new Date().getFullYear()} Al Haramain Hajj. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
