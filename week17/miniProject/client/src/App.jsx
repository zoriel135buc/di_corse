import { Routes, Route } from "react-router-dom";
import Products from "./Componends/Products";
import Product from "./Componends/Product";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
