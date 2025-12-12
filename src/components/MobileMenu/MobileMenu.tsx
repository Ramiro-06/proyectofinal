import React from 'react';
import { X } from 'lucide-react';
import { GeneralProps, NavegacionProps } from '../../types';
import './MobileMenu.css';

interface PropiedadesMobileMenu extends GeneralProps, NavegacionProps {
  estaAbierto: boolean;
  establecerAbierto: (open: boolean) => void;
}

const MobileMenu: React.FC<PropiedadesMobileMenu> = ({
  estaAbierto,
  establecerAbierto,
  idioma,
  paginaActual,
  establecerPaginaActual,
  traducciones
}) => {
  const t = traducciones[idioma];
  
  if (!estaAbierto) return null;
  
  const handleNavegacion = (pagina: NavegacionProps['paginaActual']) => {
    establecerPaginaActual(pagina);
    establecerAbierto(false);
  };
  
  return (
    <div className="mobile-menu-overlay" onClick={() => establecerAbierto(false)}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => establecerAbierto(false)} aria-label="Cerrar menú">
          <X size={24} />
        </button>
        
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {Object.entries(t.nav).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleNavegacion(key as NavegacionProps['paginaActual'])}
              className={paginaActual === key ? 'active' : ''}
            >
              {value as string}
            </button>
          ))}
          {/* Añadir Contacto/Form Data al menú móvil si es necesario, basado en el uso */}
          <button 
             onClick={() => handleNavegacion('contact')}
             className={paginaActual === 'contact' ? 'active' : ''}
          >
             {t.contact.title}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;