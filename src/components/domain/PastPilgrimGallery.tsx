import React from 'react';
import Image from 'next/image';

const PastPilgrimGallery = () => {
  const photos = [
    { src: '/hero-bg.png', alt: 'Group photo at Mecca 2023', label: 'Hajj 2023 Group' },
    { src: '/hero-bg.png', alt: 'Pilgrims at Mina', label: 'Mina Tents' },
    { src: '/hero-bg.png', alt: 'Umrah group 2024', label: 'Umrah 2024' },
    { src: '/hero-bg.png', alt: 'Breakfast at Madinah', label: 'Hotel in Madinah' },
    { src: '/hero-bg.png', alt: 'Group at Arafat', label: 'Arafat Gathering' },
    { src: '/hero-bg.png', alt: 'Guided tour at Jabal al-Nour', label: 'Historical Tour' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-green-950 mb-4">Past Pilgrim Gallery</h2>
          <div className="w-24 h-1 bg-brand-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "Seeing the Kaaba for the first time was the most emotional moment of my life. 
            Al Haramain Hajj made the entire process so easy." - Haji Rahim Uddin
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-brand-gold-500 transition-all">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-bold">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-outline">VIEW FULL GALLERY</button>
        </div>
      </div>
    </div>
  );
};

export default PastPilgrimGallery;
