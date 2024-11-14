import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios to make HTTP requests
import ProductCard from './ProductCard'; // Import the ProductCard component
import '../App.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]); // State to hold the list of products

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products'); // Fetch products from the API
                setProducts(response.data); // Set the products state with the fetched data
            } catch (error) {
                console.error("Error fetching products:", error); // Log any errors that occur during fetching
            }
        };

        fetchProducts(); // Call the fetch function when the component mounts
    }, []);

    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard key={product.id} product={product} /> // Render ProductCard for each product
                ))
            ) : (
                <p>No products available.</p> // Display a message if no products are found
            )}
        </div>
    );
};

export default ProductList;
