import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../Services/productService.jsx'; // adjust path if needed

export const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getAllProducts(); // call service
      console.log("Fetched products:", data); // 👈 Add this
      setProducts(data);
    } catch (err) {
      console.error("Error in component:", err); // 👈 Add this
      setError('Failed to fetch products');
    }
  };

  fetchProducts();
}, []);
return (
    <div className='container mt-4'>
      <h2 className='text-center mb-4'>All Products</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No products found</td>
            </tr>
          )}
</tbody>
      </table>
    </div>
  );
};
