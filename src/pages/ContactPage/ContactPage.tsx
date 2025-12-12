// src/pages/ContactPage/ContactPage.tsx
import React, { useState } from 'react';
import { GeneralProps, FormData, Page } from '../../types';
import './ContactPage.css';

interface PropiedadesContactPage extends GeneralProps {
  establecerDatosFormulario: (data: FormData) => void;
  establecerPaginaActual: (page: Page) => void;
}

const ContactPage: React.FC<PropiedadesContactPage> = ({ 
  idioma, 
  tema, 
  traducciones, 
  establecerDatosFormulario,
  establecerPaginaActual
}) => {
  const t = traducciones[idioma];
  const [estadoFormulario, establecerEstadoFormulario] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    asunto: '',
    mensaje: '',
    newsletter: false
  });
  
  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    establecerDatosFormulario(estadoFormulario); 
    alert(t.contact.thanks);
    
    establecerPaginaActual('formdata'); 

    establecerEstadoFormulario({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      empresa: '',
      asunto: '',
      mensaje: '',
      newsletter: false
    });
  };
  
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    establecerEstadoFormulario(prevState => ({
      ...prevState,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  return (
    <div className={`contact-page ${tema}`}>
      <div className="container">
        <button className="back-btn" onClick={() => establecerPaginaActual('home')}>← {t.contact.title}</button>
        
        <div className="contact-intro">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
          <p>{t.contact.thanks}</p>
        </div>
        
        <div className={`contact-form-container ${tema}`}>
          <h3>{t.contact.form}</h3>
          
          <form onSubmit={manejarEnvio}>
            <div className="form-row">
              <input
                type="text"
                name="nombre"
                placeholder={t.contact.name}
                value={estadoFormulario.nombre}
                onChange={manejarCambio}
                required
              />
              <input
                type="text"
                name="apellido"
                placeholder={t.contact.lastname}
                value={estadoFormulario.apellido}
                onChange={manejarCambio}
                required
              />
            </div>
            
            <input
              type="email"
              name="email"
              placeholder={t.contact.email}
              value={estadoFormulario.email}
              onChange={manejarCambio}
              required
            />
            
            <input
              type="tel"
              name="telefono"
              placeholder={t.contact.phone}
              value={estadoFormulario.telefono}
              onChange={manejarCambio}
            />
            
            <input
              type="text"
              name="empresa"
              placeholder={t.contact.company}
              value={estadoFormulario.empresa}
              onChange={manejarCambio}
            />
            
            <input
              type="text"
              name="asunto"
              placeholder={t.contact.subject}
              value={estadoFormulario.asunto}
              onChange={manejarCambio}
              required
            />
            
            <textarea
              name="mensaje"
              placeholder={t.contact.message}
              rows={5}
              value={estadoFormulario.mensaje}
              onChange={manejarCambio}
              required
            />
            
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={estadoFormulario.newsletter}
                onChange={manejarCambio}
              />
              {t.contact.newsletter}
            </label>
            
            <button type="submit" className="submit-btn">{t.contact.send}</button>
          </form>
          
          <p className="privacy-text">{t.contact.privacy}</p>
          <p className="privacy-text">{t.contact.interest}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;