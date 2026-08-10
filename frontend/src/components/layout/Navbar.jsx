import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FaSearch } from "react-icons/fa";
import WishlistContext from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

function Navbar({ search, setSearch }) {
  const { totalItem } = useContext(CartContext);
  const { wList } = useContext(WishlistContext);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const TotalList = wList.length;

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

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ShopEase
      </Link>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search products…"
          id="navbar-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && search.trim() !== "") {
              navigate(`/products?search=${encodeURIComponent(search)}`);
            }
          }}
        />
        <FaSearch
          className="navbar-search-icon"
          style={{ cursor: "pointer", pointerEvents: "auto" }}
          onClick={() => {
            if (search.trim() !== "") {
              navigate(`/products?search=${encodeURIComponent(search)}`);
            }
          }}
        />
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
            {link.name === "Cart" && totalItem > 0 && (
              <span className="navbar-cart-badge">{totalItem}</span>
            )}
            {link.name === "Wishlist" && TotalList > 0 && (
              <span className="navbar-cart-badge">{TotalList}</span>
            )}
          </NavLink>
        ))}

        {/* Auth link */}
        {isAuthenticated ? (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `navbar-link${isActive ? " active" : ""}`
            }
          >
            <span className="navbar-link-icon">👤</span>
            <span>{user?.name?.split(" ")[0] || "Profile"}</span>
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `navbar-link${isActive ? " active" : ""}`
            }
          >
            <span className="navbar-link-icon">🔑</span>
            <span>Login</span>
          </NavLink>
        )}

        {/* Admin link — only for ADMIN role */}
        {isAuthenticated && user?.role === "ADMIN" && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `navbar-link${isActive ? " active" : ""}`
            }
          >
            <span className="navbar-link-icon">⚙️</span>
            <span>Admin</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;