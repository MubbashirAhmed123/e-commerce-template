import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.splice(0,8));
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to Our E-Commerce Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white text-lg md:text-2xl mb-6"
          >
            Explore our wide range of products and find what you need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              to="/products"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                    <Link
                      to={`/products/${product.id}`}
                      className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                      View Product
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
          <p className="text-lg mb-6">Get 20% off on your first purchase!</p>
          <Link
            to="/products"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-200 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600">
                "Great products and amazing customer service. I'm a satisfied customer!"
              </p>
              <h3 className="mt-4 font-semibold">- Jane Doe</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600">
                "The quality of the items is superb. Will definitely shop here again."
              </p>
              <h3 className="mt-4 font-semibold">- John Smith</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600">
                "Fast delivery and great deals. Highly recommended!"
              </p>
              <h3 className="mt-4 font-semibold">- Sarah Wilson</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-6">Stay updated with our latest products and offers.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-lg text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-4 mx-3 bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold text-lg hover:bg-gray-200 transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
