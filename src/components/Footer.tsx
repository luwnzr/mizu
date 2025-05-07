import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Mizu</span>
              <span className="text-orange-500">Sushi</span>
            </div>
            <p className="text-gray-400 mb-4">
              A autêntica experiência da culinária japonesa em Carolina, MA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Cardápio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Horário</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Segunda</span>
                <span>Fechado</span>
              </li>
              <li className="flex justify-between">
                <span>Terça-Sexta</span>
                <span>18h–23h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>17h–00h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>17h–22h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contato</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Av. Principal, 123 – Centro</p>
              <p>Carolina, MA – CEP 65980-000</p>
              <p>Tel: (99) 99999-9999</p>
              <p>Email: contato@mizusushi.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Mizu Sushi – Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors mr-4">Política de Privacidade</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;