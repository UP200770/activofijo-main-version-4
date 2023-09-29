// App.js
import React, { useState } from 'react';
import './App.css';
import ActivoFijo from './components/ActivoFijo';
import { Home } from './Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TarjetasGeneradas from './components/TarjetasGeneradas';


function App() {
  const [products, setProducts] = useState([]);

  const handleSaveProduct = (generatedProducts) => {
    setProducts([...products, ...generatedProducts]);
  };

  const handleClearProduct = (indexToRemove) => {
    const updatedProducts = products.filter((_, index) => index !== indexToRemove);
    setProducts(updatedProducts);
  };

  const handleClearProducts = () => {
    setProducts([]);
  };

  // Obtén la función de navegación para redirigir a /ActivoFijo/tarjetas-generadas
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ActivoFijo"
          element={
            <ActivoFijo
              products={products}
              onSaveProduct={handleSaveProduct}
              onClearProducts={handleClearProducts}
              navigate={navigate} // Pasa la función de navegación
            />
          }
        />
        <Route
          path="/ActivoFijo/tarjetas-generadas"
          element={<TarjetasGeneradas products={products} onClearProduct={handleClearProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;

