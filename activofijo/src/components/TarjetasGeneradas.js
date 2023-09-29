import React from 'react';
import ProductLabel from './ProductLabel';

function TarjetasGeneradas({ products, onClearProduct }) {
  return (
    <div className="container mt-5">
      <h2>Tarjetas Generadas</h2>
      <div className="list-group">
        {products.map((product, index) => (
          <ProductLabel
            key={index}
            productCode={'VLM' + product.code}
            onClear={() => onClearProduct(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TarjetasGeneradas;
