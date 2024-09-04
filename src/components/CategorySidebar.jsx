import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaTshirt, FaHome, FaBook } from 'react-icons/fa';

const categories = [
  { name: 'Electronics', icon: <FaMobileAlt className="w-6 h-6 text-blue-600" /> },
  { name: 'Fashion', icon: <FaTshirt className="w-6 h-6 text-blue-600" /> },
  { name: 'Home Appliances', icon: <FaHome className="w-6 h-6 text-blue-600" /> },
  { name: 'Books', icon: <FaBook className="w-6 h-6 text-blue-600" /> },
];

const CategorySidebar = () => {
  return (
    <aside className="w-1/4 p-4 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 fixed top-16 left-0 h-screen space-y-6 overflow-y-auto z-40">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex items-center mb-8">
            <Link to={`/category/${category.name.toLowerCase()}`} className="flex items-center text-blue-600 hover:underline">
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
