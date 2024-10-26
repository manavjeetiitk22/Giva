import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
// import 'tailwindcss/tailwind.css';
import axios from 'axios';

export const server = 'https://giva-backend.onrender.com';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${server}/api/products`);
    setProducts(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const addProduct = async (newProduct) => {
  try {
    const response = await axios.post(`${server}/api/products`, newProduct);
    setProducts([...products, response.data]);
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`${server}/api/products/${id}`, updatedProduct);
    const updatedProducts = products.map((product) =>
      product.id === id ? response.data : product
);
    setProducts(updatedProducts);
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${server}/api/products/${id}`);
    setProducts(products.filter((product) => product.id !== id));
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

return (
  <div className="max-w-4xl mx-auto p-6 space-y-6">
    {/* <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Product Management System</h1> */}
    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 leading-tight tracking-tight">
      Product Management System
    </h1>

    <div className="bg-white shadow-md rounded-lg p-6">
      <ProductForm addProduct={addProduct} />
    </div>

    <div className="bg-white shadow-md rounded-lg p-6">
      {/* <h2 className="text-xl font-semibold mb-4">Product List</h2> */}
      <ProductList
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  </div>
);
};
export default App;