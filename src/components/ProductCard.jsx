import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', opacity: 0.9 }}
      className="border p-4 rounded-lg shadow-lg bg-white cursor-pointer flex flex-col h-[400px]"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative flex-grow">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-cover mb-4 rounded"
          style={{ objectFit: 'cover' }} // Ensure the image covers the container
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full">
          <FaShoppingCart className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">${product.price}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#2563EB', color: '#ffffff' }}
          transition={{ duration: 0.2 }}
          className="mt-auto px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
