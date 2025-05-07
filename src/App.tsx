import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuHighlights from './components/MenuHighlights';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Mizu Sushi - Experiência Autêntica Japonesa";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          // Cleanup
        });
      });
    };
  }, []);
  
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <MenuHighlights />
      <AboutSection />
      <Testimonials />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;