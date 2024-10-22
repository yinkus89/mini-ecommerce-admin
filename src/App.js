// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CreateProduct from './components/CreateProduct';
import NotFound from './components/NotFound';
import UpdateItem from './components/UpdateItem'; // Use UpdateItem here
import productData from './data/products.json';

function App() {
    const [products, setProducts] = useState(productData);

    const addProduct = (product) => {
        setProducts([...products, { id: products.length + 1, ...product }]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
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
                    <Route path="/add-product" element={<CreateProduct addProduct={addProduct} />} />
                    <Route path="/update-item/:id" element={<UpdateItem products={products} updateProduct={updateProduct} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
