import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  people: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    people: '2',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        people: '2',
        message: ''
      });
    }, 3000);
  };
  
  return (
    <section id="contact" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Reservas e Contato</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Faça sua Reserva</h3>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sua reserva foi enviada com sucesso! Entraremos em contato em breve.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Data
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Horário
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">
                      Nº de Pessoas
                    </label>
                    <select
                      id="people"
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                        </option>
                      ))}
                      <option value="10+">Mais de 10</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Observações (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Enviar Reserva
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-black text-white rounded-lg shadow-xl p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-orange-500">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-orange-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium">Endereço</h4>
                    <p className="text-gray-300">Av. Principal, 123 – Centro</p>
                    <p className="text-gray-300">Carolina, MA – CEP 65980-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-orange-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium">Telefone</h4>
                    <p className="text-gray-300">(99) 99999-9999</p>
                    <p className="text-gray-300">(99) 3531-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-orange-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-gray-300">contato@mizusushi.com</p>
                    <p className="text-gray-300">reservas@mizusushi.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-orange-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium">Horário de Funcionamento</h4>
                    <p className="text-gray-300">Terça a Domingo: 18h–23h</p>
                    <p className="text-gray-300">Segunda: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg shadow-md p-4">
              <iframe 
                title="Mizu Sushi Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31949.98777374534!2d-47.48368790201509!3d-7.3350176230803665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dd051d05be7b5d%3A0x9b67e2173b7ed248!2sCarolina%2C%20MA!5e0!3m2!1spt-BR!2sbr!4v1707940641434!5m2!1spt-BR!2sbr"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;