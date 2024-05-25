import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
 
// Create a new context for the product data
const ProductContext = createContext();

// Provider component that wraps the children components and provides the product data
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the server
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  // Delete a product by its ID
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts(); // Refresh products after deletion
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  // Provide the product data and related functions to the children components
  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProducts, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the product data and related functions
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
