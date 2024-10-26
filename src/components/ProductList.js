import React from 'react';
import Product from './Product';
const ProductList = ({ products, updateProduct, deleteProduct }) => {
    return (
        <div className="overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">Product List</h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  updateProduct={updateProduct}
                  deleteProduct={deleteProduct}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
};
export default ProductList;