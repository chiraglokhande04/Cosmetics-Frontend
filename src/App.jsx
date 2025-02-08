import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import WishlistPage from "./pages/WishlistPage";  
import FixedHeader from "./components/FixedHeader";
import ContactPage from "./pages/ContactPage";
 // Example: Adding Wishlist Page

const App = () => {
  return (
    <Router>
      <FixedHeader/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/contact" element={<ContactPage />} />
   
      </Routes>
    </Router>
  );
};

export default App;
