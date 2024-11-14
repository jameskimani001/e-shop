// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Import the CartProvider
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './Pages/HomePage'; 
import ProductDetails from './components/ProductDetails';
import AdminPage from './Pages/AdminPage'; 
import Cart from './components/Cart'; 
import "./App.css";

const App = () => {
    const [products, setProducts] = useState([]);

    // Function to add a new product
    const handleAddProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    // Function to update an existing product
    const handleUpdateProduct = (updatedProduct) => {
        setProducts((prevProducts) => 
            prevProducts.map(product => 
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    // Function to delete a product
    const handleDeleteProduct = (id) => {
        setProducts((prevProducts) => 
            prevProducts.filter(product => product.id !== id)
        );
    };

    return (
        <CartProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage products={products} />} />
                        <Route path="/products/:id" element={<ProductDetails products={products} />} />
                        <Route 
                            path="/admin" 
                            element={
                                <AdminPage 
                                    onAddProduct={handleAddProduct} 
                                    onUpdateProduct={handleUpdateProduct} 
                                    onDeleteProduct={handleDeleteProduct} 
                                    products={products} 
                                />
                            } 
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;
