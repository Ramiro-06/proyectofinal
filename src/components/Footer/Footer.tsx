import React, { useState } from 'react';
import { Phone, MapPin, Mail, Smartphone, Heart } from 'lucide-react'; // Importo íconos adicionales para las redes sociales/contacto
import './Footer.css';

type Idioma = 'es' | 'en';
type Tema = 'light' | 'dark';

interface PropiedadesFooter {
  idioma: Idioma;
  tema: Tema;
  traducciones: Record<string, any>;
}

const Footer: React.FC<PropiedadesFooter> = ({ idioma, tema, traducciones }) => {
  const t = traducciones[idioma];
  const [email, setEmail] = useState('');

  const manejarRegistro = () => {
    if (!email.trim()) return;
    alert(`¡Gracias por suscribirte con ${email}!`);
    setEmail('');
  };

  return (
    <footer className={`footer ${tema}`}>
      <div className="container">

        {/* Sección de Boletín y Contacto Superior */}
        <div className="footer-top-info">
          <div className="newsletter-section">
            <h4>{t.footer.newsletter}</h4>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={manejarRegistro}>
                {t.footer.register}
              </button>
            </div>
          </div>

          <div className="contact-hours-location">
            {/* Teléfono y Horarios */}
            <div className="contact-item">
              <Phone size={16} />
              <div className='info-text'>
                <strong>92 232 500</strong>
                <p>Lun. a Vie. de 9 a 18 hs. Sáb. de 9 a 13 hs.</p>
              </div>
            </div>
            {/* Ubicación */}
            <div className="contact-item">
              <MapPin size={16} />
              <div className='info-text'>
                <p>Nueva Palmira 2166</p>
                <p>La Comercial, Montevideo - Uruguay</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria, aunque en la imagen no se ve una visible. */}
        <hr className='footer-separator' />

        {/* Grid de Enlaces Inferior */}
        <div className="footer-grid">
          <div className="footer-col">
            <h4><Mail size={16} /> {t.footer.about}</h4>
            <a href="#" className="enlace">Empresa</a>
            <a href="#" className="enlace">{t.footer.contact}</a>
          </div>

          <div className="footer-col">
            <h4><Heart size={16} /> {t.footer.solutions}</h4>
            <a href="#" className="enlace">Destacados</a>
            <a href="#" className="enlace">Categorías</a>
            <a href="#" className="enlace">Nuevos</a>
            <a href="#" className="enlace">Ofertas</a>
            <a href="#" className="enlace">Outlet</a>
          </div>

          <div className="footer-col">
            <h4><Mail size={16} /> Condiciones</h4>
            <a href="#" className="enlace">Condiciones</a>
          </div>

          <div className="footer-col">
            <h4> Mi cuenta</h4>
            <a href="#" className="enlace">Mi cuenta</a>
            <a href="#" className="enlace">Boletín</a>
          </div>
          
          <div className="footer-social">
            {/* Aquí van los íconos sociales que se ven a la derecha en la imagen */}
            <a href="#" className="enlace"><Smartphone size={20} /></a> 
            <a href="#" className="enlace"><Phone size={20} /></a>
            <a href="#" className="enlace"><Mail size={20} /></a> 
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="visit-thanks">¡Gracias por tu visita y regresa pronto!</p>
          <p className="copyright-text">© Copyright 2025</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;