import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Tradição e Qualidade</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Fundado em 2018, o Mizu Sushi nasceu do sonho de trazer a autêntica culinária japonesa para Carolina. 
              Nossa missão é proporcionar uma experiência gastronômica inesquecível, combinando técnicas tradicionais 
              com toques contemporâneos.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Nossos chefs são especialistas na arte do sushi, com anos de experiência e treinamento rigoroso. 
              Utilizamos apenas ingredientes frescos e de alta qualidade, selecionados diariamente para garantir 
              o melhor sabor em cada peça.
            </p>
            <p className="text-lg leading-relaxed">
              No Mizu Sushi, cada prato é preparado com precisão, cuidado e respeito à tradição japonesa, 
              oferecendo a você uma jornada culinária única pelo Japão sem sair de Carolina.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Chef preparando sushi" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-orange-500 rounded-lg -z-10"></div>
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-orange-500 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;