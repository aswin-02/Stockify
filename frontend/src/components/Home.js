import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import './styles/Home.css'
import login from '../pic/login_pic.png'

/**
 * Home component represents the main page of the application.
 * It displays the inventory management functionality.
 */
const Home = () => {
    const [products, setProducts] = useState([]); // State variable to store the list of products
    const [selectedProduct, setSelectedProduct] = useState(null); // State variable to store the selected product for editing

    useEffect(() => {
        fetchProducts();
    }, []);

    /**
     * Fetches the list of products from the server.
     * Updates the 'products' state variable with the fetched data.
     */
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    /**
     * Handles the save action.
     * Fetches the updated list of products and resets the selected product.
     */
    const handleSave = () => {
        fetchProducts();
        setSelectedProduct(null);
    };

    /**
     * Handles the edit action.
     * Sets the selected product for editing.
    */
    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    /**
     * Handles the cancel action.
     * Resets the selected product.
     */
    const handleCancel = () => {
        setSelectedProduct(null);
    };

    /**
     * Handles the delete action.
     * Deletes the product with the specified id from the server.
     * Fetches the updated list of products after deletion.
    */
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            fetchProducts();  // Fetch the updated list after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className='home_container'>
            <div className='logout d-flex justify-content-between'>
                <div className='d-flex justity-content-between'>
                    <h3>My Inventory</h3>
                    <div className='vr' style={{marginLeft:'15px'}}></div>
                </div>
                <div>
                    <img src={login} height='40px' alt="login"></img>
                    <button className='btn btn-primary-outline log_button' onClick={() => window.location.href = '/'}>Logout</button>
                </div>
            </div>
            <div className='mt-5 inner_container'>
                <ProductForm
                    selectedProduct={selectedProduct}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
                <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Home;

 