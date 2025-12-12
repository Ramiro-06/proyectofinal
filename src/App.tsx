import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/HeroBanner/HeroBanner';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import FormDataPage from './pages/FormDataPage/FormDataPage';
import { Language, Theme, Page, FormData } from './types';
import { translations } from './constants/translations';
import './index.css';

const App: React.FC = () => {
  const [idioma, establecerIdioma] = useState<Language>('es');
  const [tema, establecerTema] = useState<Theme>('light');
  const [paginaActual, establecerPaginaActual] = useState<Page>('home');
  const [menuAbierto, establecerMenuAbierto] = useState(false);
  const [datosFormulario, establecerDatosFormulario] = useState<FormData | null>(null);
  
  const renderizarPagina = () => {
    const propsComunes = { idioma, tema, traducciones: translations };

    switch(paginaActual) {
      case 'contact':
        return (
          <ContactPage 
            {...propsComunes} 
            establecerDatosFormulario={establecerDatosFormulario} 
            establecerPaginaActual={establecerPaginaActual}
          />
        );
      case 'formdata':
        return (
          <FormDataPage 
            {...propsComunes} 
            datosFormulario={datosFormulario} 
            establecerPaginaActual={establecerPaginaActual}
          />
        );
      default:
        return <HomePage {...propsComunes} />;
    }
  };
  
  return (
    <div className={`app ${tema}`}>
      <Header 
        idioma={idioma} 
        establecerIdioma={establecerIdioma} 
        tema={tema} 
        establecerTema={establecerTema}
        paginaActual={paginaActual}
        establecerPaginaActual={establecerPaginaActual}
        establecerMenuAbierto={establecerMenuAbierto}
        traducciones={translations}
      />
      
      <MobileMenu 
        estaAbierto={menuAbierto} 
        establecerAbierto={establecerMenuAbierto} 
        idioma={idioma}
        paginaActual={paginaActual}
        establecerPaginaActual={establecerPaginaActual}
        traducciones={translations}
        tema={tema}
      />
      
      {paginaActual === 'home' && <HeroBanner idioma={idioma} tema={tema} traducciones={translations} />}
      
      <main>
        {renderizarPagina()}
      </main>
      
      <div className="quick-actions">
        <button onClick={() => establecerPaginaActual('contact')} className="fab" aria-label="Ir a Contacto">✉️</button>
        <button onClick={() => establecerPaginaActual('formdata')} className="fab" aria-label="Ver Datos del Formulario">📋</button>
      </div>
      
      <Footer idioma={idioma} tema={tema} traducciones={translations} />
    </div>
  );
};

export default App;