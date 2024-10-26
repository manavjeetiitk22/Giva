import React, { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import { MdOutlineModeEdit } from "react-icons/md";

const Product = ({ product, updateProduct, deleteProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    updateProduct(product.id, editedProduct);
    setShowModal(false);
  };

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">{product.name}</td>
        <td className="py-2 px-4 border-b">{product.description}</td>
        <td className="py-2 px-4 border-b">Rs. {product.price.toFixed(2)}</td>
        <td className="py-2 px-4 border-b">{product.quantity}</td>
        <td className="py-2 px-4 border-b flex space-x-2">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded"
            onClick={() => setShowModal(true)}
          >
            <MdOutlineModeEdit size={25}/>
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded"
            onClick={() => deleteProduct(product.id)}
          >
            <TiDelete size={25}/>
          </button>
        </td>
      </tr>

      {/* Modal for Editing Product */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-4">Edit Product</h4>
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleEditChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
              placeholder="Product Name"
            />
            <input
              type="text"
              name="description"
              value={editedProduct.description}
              onChange={handleEditChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
              placeholder="Description"
            />
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleEditChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
              placeholder="Price"
            />
            <input
              type="number"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleEditChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
              placeholder="Quantity"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
