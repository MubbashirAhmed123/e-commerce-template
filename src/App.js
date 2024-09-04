import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:category" element={<Categories />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
