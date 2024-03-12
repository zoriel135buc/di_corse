import "./App.css";
import Shop from "./Components/Shop";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { useState, createContext } from "react";
const products = [
  {
    id: 11,
    name: `dell 15`,
    price: 3000,
    description: `i5 16g 1t windows included`,
  },
  {
    id: 15,
    name: `lenovo 13`,
    price: 4500,
    description: `i7 32g 2t windows included`,
  },
  {
    id: 101,
    name: `asus 14`,
    price: 4200,
    description: `i7 16g 1t windows included`,
  },
];
export const AppContext = createContext();
function App() {
  const [MyCart, setMyCart] = useState([]);
  return (
    <AppContext.Provider value={{ MyCart, setMyCart, a: 18 }}>
      <Routes>
        <Route path="/" element={<Shop products={products} />}></Route>
        <Route
          path="/Products/:id"
          element={<Product products={products} />}
        ></Route>
        <Route path="*" element={<h2>404 Error not found</h2>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
