import { useState } from "react";
import Home from "./Componends/Home";
import Shop from "./Componends/Shop";
import About from "./Componends/About";
import Product from "./Componends/Product";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/shop"> Shop </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id/:name" element={<Product />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
