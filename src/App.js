import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} /> {/* FAQ page route */}
      </Routes>
    </Router>
  );
}

export default App;
