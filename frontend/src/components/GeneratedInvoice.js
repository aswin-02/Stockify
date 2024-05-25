import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../pic/company_logo.jpg'; 
 
const GeneratedInvoice = () => {
  const location = useLocation();
  const { products } = location.state || {}; // Get the products from the location state
  const navigate = useNavigate();

  // Random company details
  const companyDetails = {
    name: 'Rabbit House.',
    address: '123 Business Rd, Suite 456, Business City, BC 12345',
    phone: '(123) 456-7890',
    email: 'info@rabbithouse.com'
  };

  // Calculate total bill
  const total = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handlePrint = () => {
    const fileDiv = document.getElementById('file');
    if (fileDiv) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Print</title></head><body>');
      printWindow.document.write(fileDiv.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className='bg-light pt-5' style={{height:'100%'}}>
      <div id='file' className='container genInvoice_container'>
        <div className='d-flex justify-contents-between'>
          <div style={{width:'700px'}}>
            <h1>Generated Invoice</h1>
            <h2 className='mt-3'>{companyDetails.name}</h2>
            <p>{companyDetails.address}</p>
            <p>{companyDetails.phone}</p>
            <p>{companyDetails.email}</p>
          </div>
          <div>
            <img src={logo} height='300px' alt='comapany logo'></img>
          </div>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3"><strong>Total</strong></td>
              <td><strong>₹{total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className='container text-center py-5'>
        <button className='btn btn-primary mx-3' onClick={() => navigate('/home')}>Back to Home</button>
        <button className='btn btn-secondary mx-3' onClick={handlePrint}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
            <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
            <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GeneratedInvoice;
