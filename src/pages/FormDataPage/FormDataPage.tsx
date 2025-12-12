// src/pages/FormDataPage/FormDataPage.tsx
import React from 'react';
import { GeneralProps, FormData, Page } from '../../types';
import './FormDataPage.css';

interface PropiedadesFormDataPage extends GeneralProps {
  datosFormulario: FormData | null;
  establecerPaginaActual: (page: Page) => void;
}

const FormDataPage: React.FC<PropiedadesFormDataPage> = ({ 
  idioma, 
  tema, 
  traducciones, 
  datosFormulario, 
  establecerPaginaActual 
}) => {
  const t = traducciones[idioma];
  
  return (
    <div className={`form-data-page ${tema}`}>
      <div className="container">
        <h2>{t.formData.title}</h2>
        
        {!datosFormulario ? (
          <div className="no-data">
            <p>{t.formData.noData}</p>
            <button onClick={() => establecerPaginaActual('contact')} className="btn-primary">
              {t.formData.goContact}
            </button>
          </div>
        ) : (
          <div className={`data-display ${tema}`}>
            <div className="data-item">
              <strong>{t.contact.name}:</strong> {datosFormulario.nombre}
            </div>
            <div className="data-item">
              <strong>{t.contact.lastname}:</strong> {datosFormulario.apellido}
            </div>
            <div className="data-item">
              <strong>{t.contact.email}:</strong> {datosFormulario.email}
            </div>
            <div className="data-item">
              <strong>{t.contact.phone}:</strong> {datosFormulario.telefono || '-'}
            </div>
            <div className="data-item">
              <strong>{t.contact.company}:</strong> {datosFormulario.empresa || '-'}
            </div>
            <div className="data-item">
              <strong>{t.contact.subject}:</strong> {datosFormulario.asunto}
            </div>
            <div className="data-item">
              <strong>{t.contact.message}:</strong> {datosFormulario.mensaje}
            </div>
            <div className="data-item">
              <strong>Newsletter:</strong> {datosFormulario.newsletter ? 'Sí' : 'No'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDataPage;