import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductsPage from "./Pages/Product/ProductPage";
import ContactPage from "./Pages/Contact/ContactPage";
import ProductDetailsPage from "./Pages/Product/Details/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ServicePage from "./pages/Service/ServicePage";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./Pages/AboutUs/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page" element={<ProductsPage />} />
        <Route path="/Contact-page" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/service-area" element={<ServicePage />} />
        <Route path="/AboutUs-page" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
