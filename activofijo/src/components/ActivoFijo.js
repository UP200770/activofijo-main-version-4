import React from 'react';
import '../App.css';
import ProductLabel from './ProductLabel';
import ProductForm from './ProductForm';


function ActivoFijo({ products, onSaveProduct, onClearProducts, navigate, onClearProduct }) {
  const handleOpenTarjetasGeneradas = () => {
    navigate('/ActivoFijo/tarjetas-generadas');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">Generador de Activos Fijos</h2>
              <ProductForm onSave={onSaveProduct} />
              <button onClick={handleOpenTarjetasGeneradas} className="btn btn-primary mt-4">
                Imprimir
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">Activos Fijos Generados</h2>
              <button onClick={onClearProducts} className="btn btn-danger mb-3">
                <i className="fa fa-trash"></i>
                Clear All
              </button>
              <div className="list-group">
                {products.map((product, index) => (
                  <ProductLabel
                    key={index}
                    productCode={'VLM' + product.code}
                    onClear={() => onClearProduct(index)} // Llamando a onClearProduct
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivoFijo;
