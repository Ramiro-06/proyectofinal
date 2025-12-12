import React from 'react';
import { GeneralProps } from '../../types';
import './ProductCard.css';

interface ProductData {
  title: string;
  price: string;
  imageUrl: string;
}

interface PropiedadesProductCard extends GeneralProps, ProductData {}

const ProductCard: React.FC<PropiedadesProductCard> = ({ title, price, imageUrl, idioma, tema, traducciones }) => {
  const t = traducciones[idioma];
  
  return (
    <div className={`product-card ${tema}`}>
      <div className="product-image">
        <img 
          src={imageUrl} 
          alt={title} 
        />
      </div>
      <h3>{title}</h3>
      <p className="price">$U   {price}</p>
      <button className="btn-buy">{t.buy}</button>
    </div>
  );
};

export default ProductCard;