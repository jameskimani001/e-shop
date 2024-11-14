
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function AdminPage({ products = [], onAddProduct, onUpdateProduct, onDeleteProduct }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [editId, setEditId] = useState(null); // To track which product is being edited

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = { 
            id: editId ? editId : Date.now(), 
            name, 
            image, 
            price: parseFloat(price), 
            category, 
            description 
        };

        if (editId) {
            onUpdateProduct(newProduct); // Update existing product
        } else {
            onAddProduct(newProduct); // Add new product
        }

        // Reset the form
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setImage("");
        setPrice("");
        setCategory("");
        setDescription("");
        setEditId(null); // Reset edit state
    };

    const handleEdit = (product) => {
        setName(product.name);
        setImage(product.image);
        setPrice(product.price);
        setCategory(product.category);
        setDescription(product.description);
        setEditId(product.id); // Set the product ID to edit
    };

    const handleDelete = (id) => {
        onDeleteProduct(id); // Call the delete function
    };

    return (
        <div className="admin-page">
            <h2>Admin Panel</h2>
            <p>This section allows admins to manage products.</p>
            <h2>{editId ? "Edit Product" : "Add New Product"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product name"
                    required
                />
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    required
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    step="0.01"
                    placeholder="Price"
                    required
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <button type="submit">{editId ? "Update Product" : "Add Product"}</button>
            </form>

            <h2>Added Products</h2>
            <ul>
                {products.length > 0 ? (
                    products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price.toFixed(2)}
                            <Link to={`/products/${product.id}`} className="view-details-link">View Details</Link>
                            <button onClick={() => handleEdit(product)}>Edit</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No products added yet.</p>
                )}
            </ul>
        </div>
    );
}

export default AdminPage;
