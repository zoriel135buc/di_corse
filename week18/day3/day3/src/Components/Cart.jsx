import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";
import { useState } from "react";
const Cart = (props) => {
  const params = useParams();

  const { MyCart, setMyCart, a } = useContext(AppContext);
  const [sum, setsum] = useState(0);

  useEffect(() => {
    const total = MyCart.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    setsum(total);
  }, [MyCart]);

  // useEffect(() => {
  //   MyCart.push({ name: params.name, price: params.price });
  //   setMyCart([...MyCart]);
  // }, []);
  const clearCart = () => {
    setMyCart([]);
  };

  return (
    <div>
      <h2>My Cart{a}</h2>
      <div>
        {MyCart.map((item, index) => {
          return (
            <div key={index}>
              {item.name}-{item.price}
            </div>
          );
        })}
      </div>
      <div>
        <h2>{sum}</h2>
      </div>

      <div>
        <button onClick={() => clearCart()}>clearCart</button>
      </div>
      <div>
        <Link to={`/`}>Countinue Shopping</Link>
      </div>
    </div>
  );
};
export default Cart;
