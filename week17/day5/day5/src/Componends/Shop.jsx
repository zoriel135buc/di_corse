import { Link } from "react-router-dom";
const Shop = (props) => {
  const products = [
    { id: 1, name: `iMac`, price: 800 },
    { id: 2, name: `iPhone`, price: 700 },
    { id: 3, name: `iWatch`, price: 600 },
  ];
  return (
    <>
      <h2>Shop</h2>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Link to={`/product/${item.id}/${item.name}`}>Buy Now</Link>
          </div>
        );
      })}
    </>
  );
};
export default Shop;
