import React from 'react';

const TrustSignals = () => {
  return (
    <div className="bg-brand-green-950 py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* License Info */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-gold-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-brand-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Govt Approved</h3>
            <p className="text-gray-300 text-sm">Hajj License No: 1234/BD<br />Religious Affairs Ministry</p>
          </div>

          {/* Years of Service */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-gold-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-brand-green-950">15+</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Years of Service</h3>
            <p className="text-gray-300 text-sm">Trusted by over 10,000+ pilgrims since 2009</p>
          </div>

          {/* ATAB/TOAB Member */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-gold-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-brand-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Member of ATAB</h3>
            <p className="text-gray-300 text-sm">Assoc. of Travel Agents of BD<br />ID: ATAB-4567</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-gold-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-brand-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Dedicated Support</h3>
            <p className="text-gray-300 text-sm">Support in Mecca & Medina<br />Emergency Helpline Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
