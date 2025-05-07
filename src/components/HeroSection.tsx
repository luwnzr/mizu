import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-black flex items-center"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-black/50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Mizu Sushi <span className="block md:inline">– Experiência Autêntica Japonesa</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Sabores frescos e tradição em Carolina, MA
          </p>
          <a 
            href="#menu" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Ver Cardápio
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 border-2 border-white/60 rounded-full flex justify-center">
          <div className="h-2 w-1 bg-white/60 rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;