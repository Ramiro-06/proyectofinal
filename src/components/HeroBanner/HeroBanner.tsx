import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GeneralProps } from '../../types';
import './HeroBanner.css';

interface Slide {
  imageURL: string;
}

interface PropiedadesHeroBanner extends GeneralProps {}

const HeroBanner: React.FC<PropiedadesHeroBanner> = ({ idioma, tema, traducciones }) => {
  const t = traducciones[idioma];
  const [slideActual, establecerSlideActual] = useState(0);
  
  const slides: Slide[] = [
    { imageURL: '/imagenes/presentaciones0_8108.jpg' },
    { imageURL: '/imagenes/presentaciones0_8109.jpg' },
    { imageURL: '/imagenes/presentaciones0_8110.jpg' }
  ];
  
  // Carrusel
  useEffect(() => {
    const temporizador = setInterval(() => {
      establecerSlideActual((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(temporizador);
  }, [slides.length]);
  
  const siguienteSlide = () => establecerSlideActual((prev) => (prev + 1) % slides.length);
  const anteriorSlide = () => establecerSlideActual((prev) => (prev - 1 + slides.length) % slides.length);
  
  return (
    <div className={`hero-banner ${tema}`} style={{ background: slides[slideActual].imageURL }}>
      <button className="carousel-btn prev" onClick={anteriorSlide} aria-label="Anterior slide">
        <ChevronLeft size={32} />
      </button>
      
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src={process.env.PUBLIC_URL + slides[slideActual].imageURL} 
            alt="Imagen de producto en carrusel"
            className="product-display-image"
          />
        </div>
      </div>
      
      <button className="carousel-btn next" onClick={siguienteSlide} aria-label="Siguiente slide">
        <ChevronRight size={32} />
      </button>
      
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === slideActual ? 'active' : ''}`}
            onClick={() => establecerSlideActual(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;