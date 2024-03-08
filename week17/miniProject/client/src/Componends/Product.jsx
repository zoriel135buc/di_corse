import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Product = (props) => {
  const [Product, setProduct] = useState([]);
  const params = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    allProductInfo();
  }, []);
  const allProductInfo = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${params.id}`
      );
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  const GoShop = () => {
    Navigate(`/`);
  };
  return (
    <>
      <h2>Product</h2>
      {Product.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
      <Link to="/">Continue Shooping</Link>
      <br></br>
      <button onClick={GoShop}>Go to Shop</button>
    </>
  );
};
export default Product;
