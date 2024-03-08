import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = (props) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    allProducts();
  }, []);

  const allProducts = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Products</h2>
      {Products.map((item, indx) => {
        return (
          <div
            key={indx}
            style={{
              border: "1px solid #000",
              margin: "20px",
              padding: "20px",
            }}
          >
            <h2>{item.name}</h2>
            <Link to={`/${item.id}`}>more info</Link>
          </div>
        );
      })}
    </>
  );
};
export default Products;
