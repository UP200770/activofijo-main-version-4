import React from 'react';
import html2pdf from 'html2pdf.js';
import ProductLabel from './ProductLabel';
import { Link } from 'react-router-dom';

function TarjetasGeneradas({ products, onClearProduct }) {
  const downloadPDF = () => {
    const content = document.getElementById('tarjetas-generadas-content'); // Obtén el contenido que deseas convertir en PDF

    const options = {
      margin: 10,
      filename: 'tarjetas-generadas.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf(content, options);
  };

  return (
    <div className="container mt-5">
        <button onClick={downloadPDF} className="btn btn-primary mb-3">
        Descargar en PDF
      </button>

      <Link to="/ActivoFijo">
        <button className="btn btn-secondary mb-3 ml-2">Volver</button>
      </Link>
      <div id="tarjetas-generadas-content">
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
    
    </div>
  );
}

export default TarjetasGeneradas;
