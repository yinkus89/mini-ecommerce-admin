import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CreateProductForm from './components/CreateProductForm'; // Ensure to rename as per your component
import NotFound from './components/NotFound';
import productData from './products.json';

function App() {
  const [products, setProducts] = useState(productData);

  const addProduct = (product) => {
    setProducts([...products, { id: products.length + 1, ...product }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard products={products} deleteProduct={deleteProduct} />} />
          <Route path="/products/:id" element={<ProductDetailsPage products={products} />} />
          <Route path="/add-product" element={<CreateProductForm addProduct={addProduct} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

