import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { GeneralProps } from '../../types';
import './HomePage.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropiedadesHomePage extends GeneralProps {}

const HomePage: React.FC<PropiedadesHomePage> = ({ idioma, tema, traducciones }) => {
  const t = traducciones[idioma];
  
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const featuredProducts = [
    {
      title: 'Soporte Ajustable Rockbros De Celular Bicicletas Motos',
      description: 'Este soporte se adaptará a tu ritmo y estilo de vida. Ya sea en moto, bici, auto, monpatín, coche de bebé o caminadora, tu celular estará seguro y siempre a la vista.',
      price: '824.40',
      imageUrl: '/imagenes/productos31_25975.jpg'
    },
    {
      title: 'Bolsa Monopatín Rockbros Impermeable Grande 3 Litros',
      description: 'Bolsa de gran capacidad perfecta para llevar tu monopatín y accesorios. Impermeable y resistente, ideal para cualquier aventura al aire libre.',
      price: '797.86',
      imageUrl: '/imagenes/productos31_25928.jpg'
    }
  ];

  const productos = [
    { 
      title: 'Bolsa Monopatín Rockbros Impermeable Grande 3 Litros', 
      price: '797.86',
      imageUrl: '/imagenes/productos31_25928.jpg' 
    },
    { 
      title: 'Máscara Térmica de Ciclismo Bicolor con Filtro para Invierno', 
      price: '581',
      imageUrl: '/imagenes/productos31_25942.jpg'
    },
    { 
      title: 'GUANTES CON FORRO TÉRMICO POLAR', 
      price: '944',
      imageUrl: '/imagenes/productos31_19658.jpg'
    },
    { 
      title: 'Soporte Ajustable Rockbros De Celular Bicicletas Motos', 
      price: '824.40',
      imageUrl: '/imagenes/productos31_25975.jpg'
    }
  ];

  const categories = [
    { title: 'LENTES', imageUrl: '/imagenes/filename532.jpg' }, 
    { title: 'GUANTES', imageUrl: '/imagenes/filename533.jpg' }, 
    { title: 'CASCOS', imageUrl: '/imagenes/filename530.jpg' }
  ];

  const handlePrevious = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentFeaturedIndex((prev) => 
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const currentFeatured = featuredProducts[currentFeaturedIndex];
  
  return (
    <div className="page-content">
      <section className={`featured-product-banner ${tema}`}>
        <div className="banner-container">
          <div className="banner-image-container">
            <img 
              src={currentFeatured.imageUrl} 
              alt={currentFeatured.title}
              className="banner-image"
            />
          </div>
          <div className="banner-content">
            <div className="banner-badge">★ Destacados</div>
            <h1 className="banner-title">{currentFeatured.title}</h1>
            <p className="banner-description">{currentFeatured.description}</p>
            <div className="banner-footer">
              <span className="banner-price">su ${currentFeatured.price}</span>
            </div>
            <div className="banner-navigation">
              <button 
                className="nav-button nav-prev"
                onClick={handlePrevious}
                aria-label="Producto anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="banner-indicators">
                {featuredProducts.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`indicator ${idx === currentFeaturedIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
              <button 
                className="nav-button nav-next"
                onClick={handleNext}
                aria-label="Próximo producto"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={`featured-section ${tema}`}>
        <div className="products-grid">
          {productos.map((producto, idx) => (
            <ProductCard 
              key={idx} 
              title={producto.title} 
              price={producto.price} 
              imageUrl={producto.imageUrl}
              idioma={idioma} 
              tema={tema} 
              traducciones={traducciones} 
            />
          ))}
        </div>
      </section>
      
      <section className={`categories-section ${tema}`}>
        {categories.map((category, idx) => (
          <div className="category-card" key={idx}>
            <img 
              src={category.imageUrl} 
              alt={category.title} 
              className="category-background-img" 
            />
            <div className="category-overlay"></div>

          </div>
        ))}
      </section>

      <section className={`about-us-section ${tema}`}>
        <div className="logo-presentation">
          <img src="/imagenes/filename531.png" alt="Rockbros Logo" className='big-logo-icon'/>
          <p className="about-text">Rockbros - accesorios e indumentaria para tu bicicleta</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;