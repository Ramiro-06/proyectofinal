import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import './Header.css';

type Idioma = 'es' | 'en';
type Tema = 'light' | 'dark';
type Pagina = 'home' | 'bicycles' | 'clothing' | 'equipment' | 'parts' | 'offers' | 'outlet' | 'contact' | 'formdata';

interface PropiedadesHeader {
  idioma: Idioma;
  establecerIdioma: (idioma: Idioma) => void;
  tema: Tema;
  establecerTema: (tema: Tema) => void;
  paginaActual: Pagina;
  establecerPaginaActual: (pagina: Pagina) => void;
  establecerMenuAbierto: (abierto: boolean) => void;
  traducciones: Record<string, any>;
}

const Header: React.FC<PropiedadesHeader> = ({
  idioma,
  establecerIdioma,
  tema,
  establecerTema,
  paginaActual,
  establecerPaginaActual,
  establecerMenuAbierto,
  traducciones
}) => {
  const t = traducciones?.[idioma] ?? traducciones?.es ?? {};
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  const cambiarIdioma = () => {
    establecerIdioma(idioma === 'es' ? 'en' : 'es');
  };

  const cambiarTema = () => {
    establecerTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`header ${tema}`}>
      <div className="header-top">
        <div className="container header-top-inner"> 
          <div className="logo-section" onClick={() => establecerPaginaActual('home')} role="button" tabIndex={0}>
            <div className="logo">
              <img src="/imagenes/favicon.ico" alt="Rockbros Logo" className='logo-icon-image'/>
              <span className="logo-text">ROCKBROS</span>
            </div>
          </div>

          <div className="search-bar-desktop" aria-label="buscar">
            <Search size={19} /> 
            <input type="text" placeholder={idioma === 'es' ? 'Buscar...' : 'Search...'} />
          </div>

          <div className="header-actions-top">
            <button className="lang-toggle-desktop" onClick={cambiarIdioma} aria-label="Cambiar idioma">
              {idioma.toUpperCase()}
            </button>

            <button className="theme-toggle-desktop" onClick={cambiarTema} aria-label="Cambiar tema">
              {tema === 'light' ? '🌙' : '☀️'}
            </button>

            <button className="icon-btn" aria-label="Cuenta">
              <User size={18} />
            </button>

            <button className="icon-btn" aria-label="Carrito">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <div className="container header-middle-inner">
          <button 
            className={`products-menu-btn ${productsMenuOpen ? 'active' : ''}`}
            onClick={() => setProductsMenuOpen(!productsMenuOpen)}
            aria-label="Menú de productos"
          >
            <Menu size={20} />
            <span>{idioma === 'es' ? 'PRODUCTOS' : 'PRODUCTS'}</span>
          </button>

          <div className="search-bar-mobile" aria-label="buscar">
            <Search size={19} /> 
            <input type="text" placeholder={idioma === 'es' ? 'Buscar...' : 'Search...'} />
          </div>

          <div className="mobile-actions">
            <button className="lang-toggle-mobile" onClick={cambiarIdioma} aria-label="Cambiar idioma">
              {idioma.toUpperCase()}
            </button>

            <button className="theme-toggle-mobile" onClick={cambiarTema} aria-label="Cambiar tema">
              {tema === 'light' ? '🌙' : '☀️'}
            </button>

            <button className="icon-btn" aria-label="Cuenta">
              <User size={18} />
            </button>

            <button className="icon-btn" aria-label="Carrito">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        {productsMenuOpen && (
          <nav className="products-dropdown" aria-label="Navegación de productos">
            <div className="container">
              <button
                className={`dropdown-item ${paginaActual === 'home' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('home');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.motorcycles ?? 'Accesorios'}
              </button>

              <button
                className={`dropdown-item ${paginaActual === 'bicycles' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('bicycles');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.bicycles ?? 'Bicicletas'}
              </button>

              <button
                className={`dropdown-item ${paginaActual === 'clothing' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('clothing');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.clothing ?? 'Indumentaria'}
              </button>

              <button
                className={`dropdown-item ${paginaActual === 'equipment' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('equipment');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.equipment ?? 'Equipo'}
              </button>

              <button
                className={`dropdown-item ${paginaActual === 'parts' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('parts');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.parts ?? 'Piezas'}
              </button>

              <button
                className={`dropdown-item ${paginaActual === 'offers' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('offers');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.offers ?? 'Ofertas'}
              </button>

              <button
                className={`dropdown-item ${paginaActual === 'outlet' ? 'active' : ''}`}
                onClick={() => {
                  establecerPaginaActual('outlet');
                  setProductsMenuOpen(false);
                }}
              >
                {t.nav?.outlet ?? 'Outlet'}
              </button>
            </div>
          </nav>
        )}
      </div>

      <nav className="nav-bar-desktop" aria-label="Navegación principal">
        <div className="container nav-inner">
          <button
            className={`nav-item ${paginaActual === 'home' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('home')}
          >
            {t.nav?.motorcycles ?? 'Accesorios'}
          </button>

          <button
            className={`nav-item ${paginaActual === 'bicycles' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('bicycles')}
          >
            {t.nav?.bicycles ?? 'Bicicletas'}
          </button>

          <button
            className={`nav-item ${paginaActual === 'clothing' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('clothing')}
          >
            {t.nav?.clothing ?? 'Indumentaria'}
          </button>

          <button
            className={`nav-item ${paginaActual === 'equipment' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('equipment')}
          >
            {t.nav?.equipment ?? 'Equipo'}
          </button>

          <button
            className={`nav-item ${paginaActual === 'parts' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('parts')}
          >
            {t.nav?.parts ?? 'Piezas'}
          </button>

          <button
            className={`nav-item ${paginaActual === 'offers' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('offers')}
          >
            {t.nav?.offers ?? 'Ofertas'}
          </button>

          <button
            className={`nav-item ${paginaActual === 'outlet' ? 'active' : ''}`}
            onClick={() => establecerPaginaActual('outlet')}
          >
            {t.nav?.outlet ?? 'Outlet'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;