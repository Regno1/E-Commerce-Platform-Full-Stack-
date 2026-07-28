import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FaSearch } from "react-icons/fa";
import WishlistContext from "../../context/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const {wList} =useContext(WishlistContext)
  const links = [
    {
      name: "Home",
      path: "/",
      icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png",
    },
    {
      name: "Products",
      path: "/products",
      icon: "https://cdn-icons-png.flaticon.com/128/679/679720.png",
    },
    {
      name: "Wishlist",
      path: "/wishlist",
      icon: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
    },
    {
      name: "Cart",
      path: "/cart",
      icon: "https://cdn-icons-png.flaticon.com/128/1170/1170678.png",
    },
  ];

  const TotalItem = cart.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const TotalList= wList.length;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ShopEase
      </Link>

      <div className="navbar-search">
        <input type="text" placeholder="Search products…" id="navbar-search-input" />
        <FaSearch className="navbar-search-icon" />
      </div>

      <div className="navbar-links">
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) =>
              `navbar-link${isActive ? " active" : ""}`
            }
          >
            <img src={link.icon} alt={link.name} />
            <span>{link.name}</span>
            {link.name === "Cart" && TotalItem > 0 && (
              <span className="navbar-cart-badge">{TotalItem}</span>
            )}
            {link.name==="Wishlist" && TotalList>0 &&(
              <span className="navbar-cart-badge">{TotalList}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;