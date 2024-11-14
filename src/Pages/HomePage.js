
import React from 'react';
import ProductList from '../components/ProductList';

import ProductCard from '../components/ProductCard'; // Import ProductCard if you're using it directly

const HomePage = ({ products }) => { // Accept products as a prop

    return (
        <div>
            <h2>Welcome to the Electronic Shop</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} /> // Render ProductCard for each product
            
                ))}
                <ProductList />
            </div>
        </div>
    );
};

export default HomePage;
