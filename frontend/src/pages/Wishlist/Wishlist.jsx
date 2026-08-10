import { useContext } from "react";
import { Link } from "react-router-dom";

import WishlistContext from "../../context/WishlistContext";
import CartContext from "../../context/CartContext";

const Wishlist = () => {
  const { wList, removeFromWishList } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  if (wList.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">❤️</div>
        <h1>Your Wishlist is Empty</h1>
        <p style={{ color: "var(--clr-text-muted)", fontSize: "0.95rem" }}>
          Save your favourite products here.
        </p>
        <Link
          to="/products"
          className="btn-primary"
          style={{ textDecoration: "none" }}
        >
          Browse Products →
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1 className="page-title">Wishlist</h1>

      {wList.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item-left">
            <img
              src={item.image || item.imageUrl}
              alt={item.name}
              className="cart-item-img"
            />

            <div>
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-price">
                ₹{Number(item.price).toLocaleString("en-IN")}
              </p>

              <div className="wishlist-item-actions">
                <button
                  className="btn-outline"
                  onClick={() => addToCart(item)}
                >
                  🛒 Add to Cart
                </button>
                <button
                  className="btn-danger"
                  onClick={() => removeFromWishList(item)}
                >
                  ❤️ Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;