import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { placeOrder } from "../../api/orderApi";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cart, totalPrice, delivery, gst, grandTotal, clearCartItems } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [placing, setPlacing] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.fullName || !form.phone || !form.address || !form.city || !form.state || !form.pincode) {
      toast.error("Please fill in all shipping details.");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    setPlacing(true);
    try {
      await placeOrder();
      await clearCartItems();
      toast.success("Order placed successfully! 🎉");
      navigate("/orders");
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to place order. Please try again.";
      toast.error(msg);
    } finally {
      setPlacing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h1 className="page-title">Checkout</h1>
        <div className="placeholder-page" style={{ minHeight: "50vh" }}>
          <div className="placeholder-icon">🛒</div>
          <h2 className="placeholder-title">Your Cart is Empty</h2>
          <p className="placeholder-text">
            Add some products to your cart before checking out.
          </p>
          <a href="/products" className="btn-primary" style={{ textDecoration: "none" }}>
            Browse Products →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="page-title">Checkout</h1>

      <form onSubmit={handlePlaceOrder}>
        <div className="checkout-layout">
          {/* LEFT: Shipping Form */}
          <div>
            <div className="checkout-section">
              <h2 className="checkout-section-title">Shipping Information</h2>
              <div className="auth-form">
                <div className="checkout-form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="checkout-name">Full Name</label>
                    <input
                      id="checkout-name"
                      name="fullName"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="checkout-phone">Phone Number</label>
                    <input
                      id="checkout-phone"
                      name="phone"
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="checkout-address">Address</label>
                  <input
                    id="checkout-address"
                    name="address"
                    className="form-input"
                    placeholder="Street address, apartment, etc."
                    value={form.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="checkout-form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="checkout-city">City</label>
                    <input
                      id="checkout-city"
                      name="city"
                      className="form-input"
                      placeholder="City"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="checkout-state">State</label>
                    <input
                      id="checkout-state"
                      name="state"
                      className="form-input"
                      placeholder="State"
                      value={form.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group" style={{ maxWidth: "200px" }}>
                  <label className="form-label" htmlFor="checkout-pincode">Pincode</label>
                  <input
                    id="checkout-pincode"
                    name="pincode"
                    className="form-input"
                    placeholder="6-digit pincode"
                    value={form.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div>
            <div className="checkout-section">
              <h2 className="checkout-section-title">Order Summary</h2>
              {cart.map((item) => (
                <div className="checkout-item" key={item.cartItemId || item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="checkout-item-img"
                  />
                  <div className="checkout-item-info">
                    <div className="checkout-item-name">{item.name}</div>
                    <div className="checkout-item-qty">Qty: {item.qty}</div>
                  </div>
                  <div className="checkout-item-price">
                    ₹{(Number(item.price) * item.qty).toLocaleString("en-IN")}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-row">
                <span className="label">Subtotal</span>
                <span className="value">₹{Number(totalPrice).toLocaleString("en-IN")}</span>
              </div>
              <div className="cart-summary-row">
                <span className="label">GST (18%)</span>
                <span className="value">₹{Math.round(gst).toLocaleString("en-IN")}</span>
              </div>
              <div className="cart-summary-row">
                <span className="label">Delivery</span>
                <span className="value">{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
              </div>
              <div className="cart-summary-row total">
                <span className="label">Total</span>
                <span className="value">₹{Math.round(grandTotal).toLocaleString("en-IN")}</span>
              </div>

              <button
                type="submit"
                className="checkout-btn"
                disabled={placing}
              >
                {placing ? "Placing Order…" : "🔒 Place Order"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;