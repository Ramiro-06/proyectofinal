// src/types/index.ts

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';
export type Page = 'home' | 'bicycles' | 'clothing' | 'equipment' | 'parts' | 'offers' | 'outlet' | 'contact' | 'formdata';

export interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  empresa: string;
  asunto: string;
  mensaje: string;
  newsletter: boolean;
}

export interface GeneralProps {
  idioma: Language;
  tema: Theme;
  traducciones: Record<string, any>;
}

export interface NavegacionProps {
  paginaActual: Page;
  establecerPaginaActual: (page: Page) => void;
}