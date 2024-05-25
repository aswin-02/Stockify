import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./components/Home";
import Login from "./components/Login";
import Invoice from "./components/Invoice";
import GeneratedInvoice from './components/GeneratedInvoice';
import { ProductsProvider } from './components/ProductContext';

const App = () => {  
  return (
    <div >
      {/* Wrap the entire application with the ProductsProvider to provide product context */}
      <ProductsProvider> 
        <Router>
          <Routes> 
            {/* Route for the login page */}
            <Route path="/" element={<Login />} />
            {/* Route for the home page */}
            <Route path="/home" element={<Home />} />  
            {/* Route for the invoice page */}
            <Route path="/invoice" element={<Invoice />} />
            {/* Route for the generated invoice page */}
            <Route path="/generated-invoice" element={<GeneratedInvoice />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </div>
  );
};

export default App;
