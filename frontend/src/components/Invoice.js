import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/Invoice.css'
import login from '../pic/login_pic.png'
 
const Invoice = () => {
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };
  const navigate = useNavigate();

  // Calculate total bill
  const total = selectedProducts.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className='bg-light text-center' style={{minHeight:'100vh'}}>
       <div className='logout d-flex justify-content-between'>
            <div className='d-flex justity-content-between'>
            <h3>My Invoice</h3>
            <div className='vr' style={{marginLeft:'15px'}}></div>
            </div>
            <div> 
            <img src={login} height='40px' alt="login"></img>
            <button className='btn btn-primary-outline log_button' onClick={() => window.location.href = '/'}>Logout</button>
            
                </div>
            </div>
            <div className='container  invoice_container'>
      <h5><u>Items for Invoice</u></h5>
      {selectedProducts.length === 0 ? (
        <p>No items selected for the invoice.</p>
      ) : (
        <table className="my-5 table w-50 text-center border table_content">
          <thead>
            <tr>
              <th >Item</th>
              <th className='border'>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((item, index) => (
              <tr key={index}>
                <td >{item.name}</td>
                <td className='border'>{item.quantity}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className='border'><strong>Total</strong></td>
              <td><strong>₹{total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      )}
      <button className='btn btn-primary text-light mx-5' onClick={() => navigate('/generated-invoice', { state: { products: selectedProducts } })}>
        Generate Invoice
      </button>
      <button className='btn btn-secondary mx-5' onClick={() => navigate('/home')}>Back to Home</button>
      </div>
    </div>
  );
};

export default Invoice;
