import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyOrders } from "../../api/orderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await getMyOrders();
        setOrders(res.data || []);
      } catch {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusClass = (status) => {
    if (!status) return "";
    return status.toLowerCase();
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1 className="page-title">My Orders</h1>

      {orders.length === 0 ? (
        <div className="placeholder-page" style={{ minHeight: "50vh" }}>
          <div className="placeholder-icon">📦</div>
          <h2 className="placeholder-title">No Orders Yet</h2>
          <p className="placeholder-text">
            You haven't placed any orders yet. Start shopping and your orders
            will appear here.
          </p>
          <Link
            to="/products"
            className="btn-primary"
            style={{ textDecoration: "none" }}
          >
            Start Shopping →
          </Link>
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <div className="order-card" key={order.orderID}>
              <div className="order-card-header">
                <div>
                  <div className="order-id">Order #{order.orderID}</div>
                  <div className="order-date">{formatDate(order.createdAt)}</div>
                </div>
                <span
                  className={`order-status-badge ${getStatusClass(order.status)}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="order-card-body">
                {(order.items || []).map((item, idx) => (
                  <div className="order-item-row" key={idx}>
                    <div>
                      <span className="order-item-name">{item.productName}</span>
                      <span className="order-item-detail"> × {item.quantity}</span>
                    </div>
                    <span className="order-item-detail">
                      ₹{parseFloat(item.subTotal || 0).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="order-card-footer">
                <div className="order-total">
                  <span>Total:</span>
                  ₹{parseFloat(order.totalAmount || 0).toLocaleString("en-IN")}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;