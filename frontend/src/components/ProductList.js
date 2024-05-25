import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
 
/**
 * Renders a list of products with checkboxes, allowing the user to select multiple products.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.products - The array of products to display.
 * @param {Function} props.onEdit - The function to call when editing a product.
 * @param {Function} props.onDelete - The function to call when deleting a product.
 * @returns {JSX.Element} The rendered ProductList component.
 */
const ProductList = ({ products, onEdit, onDelete }) => {
    // State variables
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const navigate = useNavigate();

    // Update selectAll state when selectedProducts or products change
    useEffect(() => {
        setSelectAll(selectedProducts.length === products.length);
    }, [selectedProducts, products]);

    /**
     * Handles the selection of a product.
     * If the product is already selected, it is deselected. Otherwise, it is selected.
     * Updates the selectAll state accordingly.
     * 
     * @param {Object} product - The selected product.
     */
    const handleSelect = (product) => {
        setSelectedProducts(prev => {
            const updatedSelection = prev.includes(product) ? prev.filter(p => p !== product) : [...prev, product];
            setSelectAll(updatedSelection.length === products.length);
            return updatedSelection;
        });
    };

    /**
     * Handles the deletion of a product.
     * Deletes the product with the specified ID from the server.
     * Calls the onDelete function to remove the product from the parent component.
     * Reloads the page after deletion.
     * 
     * @param {number} id - The ID of the product to delete.
     */
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            onDelete(id); // Pass the deleted product ID to the parent component
        } catch (error) {
            console.error('Error deleting product:', error);
        }
        window.location.reload();
    };

    /**
     * Handles the selection of all products.
     * If selectAll state is true, deselects all products. Otherwise, selects all products.
     * Toggles the selectAll state.
     */
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedProducts([]);
        } else {
            setSelectedProducts(products);
        }
        setSelectAll(prev => !prev);
    };

    /**
     * Handles the generation of an invoice for the selected products.
     * Navigates to the '/invoice' route and passes the selected products as state.
     */
    const handleGenerateInvoice = () => {
        navigate('/invoice', { state: { selectedProducts } });
    };

    return (
        <div className='mt-5'>
            {products.length > 0 ? 
            <div>
            <h2>Product List</h2>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectAll}
                            />
                        </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.product_id}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSelect(product)}
                                    checked={selectedProducts.includes(product)}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>₹{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => onEdit(product)}>&#x270E;</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(product.product_id)}>&#9986;</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={handleGenerateInvoice} disabled={selectedProducts.length === 0}>
                Generate Invoice
            </button>
            </div>
            :
            <h6 className='text-center'>your inventory is empty try to add items.</h6>
            }
        </div>
    );
};

export default ProductList;
