import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./pages/Product/ProductPage";
import ContactPage from "./pages/Contact/ContactPage";
import ProductDetailsPage from "./pages/Product/Details/ProductDetailPage";
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
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/About-us  " element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
