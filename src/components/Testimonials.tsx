import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    comment: 'O melhor sushi que já experimentei! Ingredientes super frescos e atendimento impecável. Recomendo fortemente o combo família, vale muito a pena.',
    rating: 5
  },
  {
    id: 2,
    name: 'João Pereira',
    comment: 'Ambiente aconchegante e pratos deliciosos. O Uramaki Special é simplesmente divino. Já virou ponto de encontro com os amigos nos fins de semana.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Costa',
    comment: 'A experiência no Mizu Sushi superou todas as minhas expectativas. Os temakis são incríveis e o atendimento é muito atencioso. Voltarei com certeza!',
    rating: 4
  },
  {
    id: 4,
    name: 'Lucas Mendes',
    comment: 'Fiquei impressionado com a qualidade e frescor dos peixes. O chef é muito habilidoso e o ambiente é muito agradável. Recomendo a todos!',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.ceil(testimonials.length / itemsPerSlide) - 1;

  const nextSlide = () => {
    setActiveIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const displayTestimonials = () => {
    const start = activeIndex * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">O que dizem nossos clientes</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-orange-500 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayTestimonials().map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="bg-black text-white rounded-lg p-6 shadow-lg border-2 border-orange-500"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-400"}
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.comment}"</p>
                  <p className="text-orange-500 font-medium">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-orange-500 transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;