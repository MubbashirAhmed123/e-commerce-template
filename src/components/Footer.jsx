import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-6 mt-3">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">E-Commerce</h2>
        <p className="text-gray-200 mb-4">
          © 2024 E-Commerce. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
