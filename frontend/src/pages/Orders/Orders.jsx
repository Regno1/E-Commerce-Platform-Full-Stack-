
const Orders = () => {
  return (
    <div className="orders-page">
      <h1 className="page-title">My Orders</h1>

      <div className="placeholder-page" style={{ minHeight: "50vh" }}>
        <div className="placeholder-icon">📦</div>
        <h2 className="placeholder-title">No Orders Yet</h2>
        <p className="placeholder-text">
          You haven't placed any orders yet. Start shopping and your orders will appear here.
        </p>
        <a href="/products" className="btn-primary" style={{ textDecoration: "none" }}>
          Start Shopping →
        </a>
      </div>
    </div>
  );
};

export default Orders;