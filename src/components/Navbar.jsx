import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaBoxes, FaTag } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white p-4 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          E-Commerce
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center hover:underline">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/products" className="flex items-center hover:underline">
            <FaBoxes className="mr-2" /> Products
          </Link>
          <Link to="/categories" className="flex items-center hover:underline">
            <FaTag className="mr-2" /> Categories
          </Link>
          <Link to="/contact" className="flex items-center hover:underline">
            <GrContact className="mr-2" /> Contact
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-80 h-full bg-white text-blue-600 p-4 shadow-lg z-50"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-blue-600 hover:text-blue-800"
          >
            <HiX size={24} />
          </button>
          <div className="flex flex-col space-y-6 mt-12">
            <Link to="/" className="flex items-center hover:underline" onClick={toggleMenu}>
              <FaHome className="mr-2" /> Home
            </Link>
            <Link to="/products" className="flex items-center hover:underline" onClick={toggleMenu}>
              <FaBoxes className="mr-2" /> Products
            </Link>
            <Link to="/categories" className="flex items-center hover:underline" onClick={toggleMenu}>
              <FaTag className="mr-2" /> Categories
            </Link>
            <Link to="/contact" className="flex items-center hover:underline" onClick={toggleMenu}>
              <GrContact className="mr-2" /> Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
