import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";

const Product = (props) => {
  const { products } = props;
  const [Prod, setProd] = useState({});
  const { MyCart, setMyCart } = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((item) => item.id == params.id);
    console.log(product);
    setProd(product);
  }, []);
  const goToCart = (name, price) => {
    MyCart.push({ name, price });
    setMyCart([...MyCart]);
    navigate(`/cart`);
  };

  return (
    <div>
      <h1>Product</h1>
      <h2>Name: {Prod.name}</h2>
      <h3>Price: {Prod.price}</h3>
      <p> description: {Prod.description}</p>
      <button onClick={() => goToCart(Prod.name, Prod.price)}>Buy now:</button>
    </div>
  );
};
export default Product;
