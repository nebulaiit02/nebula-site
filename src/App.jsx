import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductsPage from "./Pages/Product/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
