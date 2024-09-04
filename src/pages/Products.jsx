import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';
import { motion } from 'framer-motion';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <CategorySidebar />
      <div className="ml-[25%] w-full p-4 bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
