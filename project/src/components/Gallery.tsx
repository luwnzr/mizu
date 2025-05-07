import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Sashimi de salmão fresco',
    category: 'pratos'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Sushi variado',
    category: 'pratos'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Combinado especial',
    category: 'pratos'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/6219774/pexels-photo-6219774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Restaurante ambiente',
    category: 'ambiente'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Bar de sushi',
    category: 'ambiente'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Chef preparando sushi',
    category: 'eventos'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
    
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">Momentos Mizu Sushi</h2>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-900 rounded-lg p-1">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all' ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-500'
              } transition-colors`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFilter('pratos')}
              className={`px-4 py-2 rounded-md ${
                filter === 'pratos' ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-500'
              } transition-colors`}
            >
              Pratos
            </button>
            <button 
              onClick={() => setFilter('ambiente')}
              className={`px-4 py-2 rounded-md ${
                filter === 'ambiente' ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-500'
              } transition-colors`}
            >
              Ambiente
            </button>
            <button 
              onClick={() => setFilter('eventos')}
              className={`px-4 py-2 rounded-md ${
                filter === 'eventos' ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-500'
              } transition-colors`}
            >
              Eventos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center text-lg font-medium px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain"
            />
            <p className="absolute bottom-8 text-white text-center text-lg">{selectedImage.alt}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;