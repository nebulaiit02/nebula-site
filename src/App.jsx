import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css'
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
    

      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
