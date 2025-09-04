import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactPage from "./pages/Contact/ContactPage";
import ProductDetailPage from "./pages/Product/Details/ProductDetailPage";
import ProductsPage from "./pages/Product/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/Service/ServicePage";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./Pages/AboutUs/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page" element={<ProductsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/About-us  " element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
