import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS for styling
import { CartContext } from './CartContext'; // Import the CartContext

const ProductCard = ({ product }) => {
    const { addToCart, removeFromCart } = useContext(CartContext); // Access cart functions from context

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id); // Remove product from cart
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-actions">
                <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
                <button onClick={handleRemoveFromCart} className="remove-from-cart-button">Remove from Cart</button>
                <Link to={`/products/${product.id}`} className="view-details-link">View Details</Link>
            </div>
        </div>
    );
};

export default ProductCard;
