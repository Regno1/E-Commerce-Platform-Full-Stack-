
const Checkout = () => {
  return (
    <div className="checkout-page">
      <h1 className="page-title">Checkout</h1>

      <div className="placeholder-page" style={{ minHeight: "50vh" }}>
        <div className="placeholder-icon">🔒</div>
        <h2 className="placeholder-title">Secure Checkout</h2>
        <p className="placeholder-text">
          Your payment and personal information is always protected. Complete your order safely.
        </p>
        <a href="/cart" className="btn-secondary" style={{ textDecoration: "none" }}>
          ← Back to Cart
        </a>
      </div>
    </div>
  );
};

export default Checkout;