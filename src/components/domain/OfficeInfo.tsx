import React from 'react';

const OfficeInfo = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-brand-green-950 mb-6">Our Head Office</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-brand-gold-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-green-900">Dhaka, Bangladesh</h4>
                  <p className="text-gray-600">House #12, Road #4, Sector #3, Uttara, Dhaka-1230</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-brand-gold-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-green-900">Phone & WhatsApp</h4>
                  <p className="text-gray-600">+880 1711-223344 (Hotline)</p>
                  <p className="text-gray-600">+880 1811-556677 (Support)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-brand-gold-600 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-green-900">Email</h4>
                  <p className="text-gray-600">info@alharamainhajj.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.167262274813!2d90.3957866!3d23.8705359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c410368940ad%3A0x6a1651c6c59d54e1!2sUttara%20Sector%203%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1713360000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;
