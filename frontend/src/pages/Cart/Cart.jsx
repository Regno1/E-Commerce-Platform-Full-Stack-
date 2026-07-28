import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const {
  cart,
  increaseQty,
  decreaseQty,
  totalPrice,
  totalItem,
  delivery,
  grandTotal,
} = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h1>Your Cart is Empty</h1>
        <p style={{ color: "var(--clr-text-muted)", fontSize: "0.95rem" }}>
          Looks like you haven't added anything yet. Start shopping!
        </p>
        <a href="/products" className="btn-primary" style={{ textDecoration: "none" }}>
          Browse Products →
        </a>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="cart-layout">
        {/* ── LEFT: Cart Items ── */}
        <div className="cart-items-col">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-left">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div>
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">₹{item.price.toLocaleString("en-IN")}</p>
                  <p className="cart-item-qty-label">Qty: {item.qty}</p>
                </div>
              </div>

              <div className="cart-qty-controls">
                <button
                  className="cart-qty-btn"
                  onClick={() => increaseQty(item)}
                  title="Increase quantity"
                >
                  +
                </button>
                <span className="cart-qty-value">{item.qty}</span>
                <button
                  className="cart-qty-btn decrease"
                  onClick={() => decreaseQty(item)}
                  title="Decrease quantity"
                >
                  −
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── RIGHT: Order Summary ── */}
        <div className="cart-summary-col">
          <div className="cart-summary">
            <h2 className="cart-summary-title">Order Summary</h2>

            <div className="cart-summary-row">
              <span className="label">Total Items</span>
              <span className="value">{totalItem}</span>
            </div>
            <div className="cart-summary-row">
              <span className="label">Subtotal</span>
              <span className="value">₹{Number(totalPrice).toLocaleString("en-IN")}</span>
            </div>
            <div className="cart-summary-row">
              <span className="label">Delivery</span>
              <span className="value">₹{delivery}</span>
            </div>
            <div className="cart-summary-row total">
              <span className="label">Grand Total</span>
              <span className="value">₹{Math.round(grandTotal).toLocaleString("en-IN")}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;