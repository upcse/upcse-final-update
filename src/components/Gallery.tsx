import React, { useState } from 'react';
import { ASSET_PATHS } from '../lib/assets';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  type: 'event' | 'news';
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'events' | 'news'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Distribute images between events and news (30% events, 70% news)
  const galleryImages: GalleryImage[] = ASSET_PATHS.gallery.map((img, index) => {
    const totalImages = ASSET_PATHS.gallery.length;
    const eventsCount = Math.floor(totalImages * 0.3); // 30% for events
    
    return {
      id: img.id,
      url: img.url,
      caption: `Sports Event ${index + 1}`,
      type: index < eventsCount ? 'event' : 'news'
    };
  });

  const filteredImages = galleryImages.filter(img => 
    activeFilter === 'all' || img.type === activeFilter.slice(0, -1)
  );

  const filterClasses = (filter: 'all' | 'events' | 'news') => `
    px-6 py-2 rounded-full transition-colors
    ${activeFilter === filter 
      ? 'bg-[#FF9933] text-white' 
      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}
  `;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className="text-lg text-gray-600">
          Capturing memorable moments from our events and activities
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <button 
          className={filterClasses('all')}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={filterClasses('events')}
          onClick={() => setActiveFilter('events')}
        >
          Events
        </button>
        <button 
          className={filterClasses('news')}
          onClick={() => setActiveFilter('news')}
        >
          News
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.url}
              alt={image.caption || 'Gallery image'}
              onClick={() => setSelectedImage(image.url)}
              className="cursor-pointer"
            />
            <div className="gallery-overlay">
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase font-semibold">
                  {image.type}
                </span>
                {image.caption && (
                  <h3 className="text-lg font-semibold">{image.caption}</h3>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            aria-label="Close fullscreen image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;