import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_product" element={<AddProduct />} />   
        </Routes>
      </BrowserRouter>
  );
}

export default App;
