"use client";

import Link from "next/link";

interface PackageCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export default function PackageCard({ id, name, description, price, features, isPopular }: PackageCardProps) {
  return (
    <div className={`card-container relative flex flex-col p-6 ${isPopular ? 'border-brand-gold-500 border-2 shadow-xl ring-1 ring-brand-gold-500' : ''}`}>
      {isPopular && (
        <span className="absolute top-0 right-0 bg-brand-gold-500 text-brand-green-950 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
          Most Popular
        </span>
      )}
      
      <div className="mb-4">
        <h3 className="text-2xl font-serif font-bold text-brand-green-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 min-h-[40px]">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">৳{price.toLocaleString('en-IN')}</span>
      </div>

      <ul className="mb-8 space-y-3 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-5 h-5 text-brand-green-500 shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link 
        href={`#pre-register`} 
        className={`text-center w-full ${isPopular ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => {
          // Future: pre-fill the form package ID
          console.log(`Selected package: ${id}`);
        }}
      >
        Enquire Now
      </Link>
    </div>
  );
}
