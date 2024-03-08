import { Link, link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Shop</Link>
        </nav>
      </header>
    </div>
  );
};
export default Menu;
