// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Ensure the import path is correct

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext); // Access cart context

    if (cartItems.length === 0) {
        return <h2>Your cart is empty</h2>;
    }

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name} (x{item.quantity})</span>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
