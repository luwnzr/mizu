import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg py-2' : 'bg-black/70 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl md:text-3xl">
            <span className="text-white">Mizu</span>
            <span className="text-orange-500">Sushi</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-orange-500 transition-colors">Início</a>
            <a href="#menu" className="text-white hover:text-orange-500 transition-colors">Cardápio</a>
            <a href="#about" className="text-white hover:text-orange-500 transition-colors">Sobre Nós</a>
            <a href="#gallery" className="text-white hover:text-orange-500 transition-colors">Galeria</a>
            <a href="#contact" className="text-white hover:text-orange-500 transition-colors">Contato</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
              Faça sua reserva!
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 absolute top-full left-0 w-full`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-white hover:text-orange-500 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#menu" 
            className="text-white hover:text-orange-500 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Cardápio
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-orange-500 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </a>
          <a 
            href="#gallery" 
            className="text-white hover:text-orange-500 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Galeria
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-orange-500 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors">
            Faça sua reserva!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;