import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductsPage from "./Pages/Product/ProductPage";

import Home from "./Pages/Home/Home";
import ContactPage from "./Pages/Contact/ContactPage";
import ProductDetailsPage from "./Pages/Product/Details/ProductDetailPage";
import ServicePage from "./Pages/Service/ServicePage";   
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product-page" element={<ProductsPage />} />

        <Route path="/Home-page" element={<Home />} />
        <Route path="/Contact-page" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/service-area" element={<ServicePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
